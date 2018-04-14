import React, { PureComponent } from 'react'
import * as Profile from './Profile'
import { createUser }  from './ProfileService'
import { graphql } from 'react-apollo'


const MESSAGES = {
  success: 'User is saved successfully with id: ',
  fail: 'Some error has occured'
}

const getFormatedDate = value => new Date(value).toISOString()


class ProfileContainer extends PureComponent {
  constructor() {
    super()

    this.state = {
      message: null
    }
  }

  clearMessage = () => {
    this.setState({ message: '' })
  }

  onSubmitClick = ({ firstName, lastName, gender, birthDate }) => {
    this.props.mutate({
      variables: {
        firstName,
        lastName,
        gender,
        birthDate: getFormatedDate(birthDate)
      }
    })
    .then(({ data }) => {
      const { createUser: { id } } = data
      this.setState({ message: MESSAGES.success + id })
    }).catch((error) => {
      this.setState({ message: MESSAGES.fail })
    })
  }

  render() {
    const { message } = this.state

    return(
      <Profile
        onSubmitClick={ this.onSubmitClick }
        clearMessage={ this.clearMessage }
        message={ message }
      />
    )
  }
}

export default graphql(createUser)(ProfileContainer)