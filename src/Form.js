import React from 'react';


class Form extends React.Component {

  state = {
    info: []
  }


  getInfoFunction = (event) => {
    // event.preventDefault()
    fetch('http://localhost:49567/api/service-types')
    .then(response => response.json())
    .then(data => {
      this.setState({
        info: data
      })
    })
  }

  render(){
    console.log(this.state.info)
    return (
      <div className="App">
        New Request
        <h1>This is where state goes: {this.state.info}</h1>
        <form>
          <label>First Name:
            <input type="text" name="name"/>
          </label>
          <label>Last Name:
            <input type="text" name="name"/>
          </label>
          <label>Email Address:
            <input type="text" name="name"/>
          </label>
          <label>Select Service Type:
            <select>
              <option>Employment</option>
              <option>Benefits</option>
              <option>Healthcare</option>
              <option>Housing</option>
              <option>Legal</option>
            </select>
          </label>
          <textarea defaultValue="yooo"></textarea>
        </form>
      </div>
    )
  }
}

export default Form
