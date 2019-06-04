import React from 'react';

const APIGET = `http://localhost:49567/api/service-types`
const APIPOST = `http://localhost:49567/api/assistance-requests`



class Form extends React.Component {

    state = {
      info: [],
      firstName: '',
      lastName: '',
      email: '',
      selectData: 'Benefits',
      textData: ''
    }

  componentDidMount(){
    fetch(APIGET)
    .then(response => response.json())
    .then(data => {
      this.setState({
      info: data.data
    })
  })
  }

  submitFunction = (event) => {
    event.preventDefault()
    fetch(APIPOST, {
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json'},
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify({ assistance_request: {
                                contact: {
                                  first_name: this.state.firstName,
                                  last_name: this.state.lastName,
                                  email: this.state.email
                                },
                                service_type: this.state.selectData,
                                description: this.state.textData
                                }
                          })
        })
        .then(response => {
          if (response.status > 299) {
            response.json().then(data => {
              alert(data.message)
            })
          // alert("the status code was " + response.status)
        } else {
          console.log(response.status)
        }
        })
  }

  changeFunction = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })

  }


  render(){
    console.log(this.state)

    return (
      <div className="App">
        New Request
        <form onSubmit={this.submitFunction}>
          <label>First Name:
            <input onChange={this.changeFunction} type="text" name="firstName" value={this.state.firstName}/>
          </label>
          <label>Last Name:
            <input onChange={this.changeFunction} type="text" name="lastName" value={this.state.lastName}/>
          </label>
          <label>Email Address:
            <input onChange={this.changeFunction} type="text" name="email" value={this.state.email}/>
          </label>
          <label>Select Service Type:
            <select onChange={this.changeFunction} name="selectData" value={this.state.selectData}>
              {this.state.info.map((item, id) => {
                  return <option key={id}>{item.display_name}</option>
                })}
            </select>
          </label>
          <textarea onChange={this.changeFunction} name="textData" value={this.state.textData} placeholder="type request here"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }



}

export default Form
