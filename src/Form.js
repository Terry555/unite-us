import React from 'react';

const API = `http://localhost:49567/api/service-types`


class Form extends React.Component {

    state = {
      info: [],
      formValues: {
        firstName: '',
        lastName: '',
        email: '',
        select: ''
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
    // event.preventDefault()
    debugger
    this.setState({
      formValues: {
        firstName: 'testing'
      }
    })
  }


  render(){
    console.log(this.state.info)

    return (
      <div className="App">
        New Request
        <ul>This is where state goes:
        </ul>
        <form onSubmit={this.submitFunction}>
          <label>First Name:
            <input onChange={this.changeFunction} type="text" name="first_name" value={this.state.formValues.firstName}/>
          </label>
          <label>Last Name:
            <input type="text" name="last_name"/>
          </label>
          <label>Email Address:
            <input type="text" name="email"/>
          </label>
          <label>Select Service Type:
            <select>
              {this.state.info.map((item, id) => {
                  return <option key={id}>{item.display_name}</option>
                })}
            </select>
          </label>
          <textarea defaultValue="default text"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }



}

export default Form
