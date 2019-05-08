import React from 'react';


class Form extends React.Component {
  render(){
    return (
      <div className="App">
        New Assistance Request
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
          <textarea>Testing</textarea>
        </form>
      </div>
    )
  }
}

export default Form
