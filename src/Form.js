import React from 'react';

const API = `http://localhost:49567/api/service-types`


class Form extends React.Component {

    state = {
      info: [],
      testing: '',
      formValues: {
        firstName: '',
        lastName: '',
        email: '',
        selectData: '',
        textData: ''
      }
    }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(data => {
      this.setState({
      info: data.data
    })
  })
  }

  submitFunction = (event) => {
    event.preventDefault()
    // fetch(API).then().then()
  }

  changeFunction = (event) => {
    event.preventDefault()
    this.setState({
      formValues: {[event.target.name]: event.target.value}
    })

  }


  render(){
    console.log(this.state)

    return (
      <div className="App">
        New Request
        <ul>This is where state goes:
        </ul>
        <form onSubmit={this.submitFunction}>
          <label>First Name:
            <input onChange={this.changeFunction} type="text" name="firstName" value={this.state.formValues.firstName}/>
          </label>
          <label>Last Name:
            <input onChange={this.changeFunction} type="text" name="lastName" value={this.state.formValues.lastName}/>
          </label>
          <label>Email Address:
            <input onChange={this.changeFunction} type="text" name="email" value={this.state.formValues.email}/>
          </label>
          <label>Select Service Type:
            <select name="selectData">
              {this.state.info.map((item, id) => {
                  return <option key={id}>{item.display_name}</option>
                })}
            </select>
          </label>
          <textarea defaultValue="default text" name="textData"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }



}

export default Form
