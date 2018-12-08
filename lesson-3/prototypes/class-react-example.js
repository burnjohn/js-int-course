import React, {PureComponent} from 'react';
import Profile from './Profile';
import {createUser} from './ProfileService';
import {graphql} from 'react-apollo';

const MESSAGES = {
  success: 'User is saved successfully with id: ',
  fail: 'Some error has occured',
};

const getFormatedDate = value => new Date(value).toISOString();

class ProfileContainer extends Component {
  constructor(arg1, arg2){
    super(arg1, arg2)
  }

  clearMessage = () => {
    this.saveDataToState({ message: '' })
  };

  saveDataToState(data) {
    this.setState({
      ...data,
    })
  }

  onSubmitClick = ({firstName, lastName, gender, birthDate}) => {
    this.props.mutate({
      variables: {
        firstName,
        lastName,
        gender,
        birthDate: getFormatedDate(birthDate),
      },
    }).then(({data}) => {
      const {createUser: { id }} = data;

      this.saveDataToState({ message: MESSAGES.success + id });

    }).catch((error) => {
      this.setState({message: MESSAGES.fail});
    });
  };

  render() {
    const { message } = this.state;

    return (
      <Profile
        onSubmitClick={this.onSubmitClick}
        clearMessage={this.clearMessage}
        message={message}
      />
    );
  }
}

ProfileContainer.defautProps = {

};

ProfileContainer.propTypes = {

};


export default graphql(createUser)(ProfileContainer);