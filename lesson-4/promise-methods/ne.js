class Component extends React.Component {
  constructor() {
    this.state ={
      data: null,
      error: null
    }
  },

  sendRequest() {
    this.props.sendRequest()
      .then( data => {
        this.setState({ data })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render(){
    return (
      <div>
      { this.state.data
          ? <ErrorComponent errorText={this.state.error} />
          : <NormalComponent />
      }
      </div>

    );
  }
}