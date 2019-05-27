import React from 'react';

const API = `http://localhost:49567/api/service-types`


class Form extends React.Component {
  // constructor(props){
  //   super(props);

    state = {
      info: []
      // isLoading: false,
      // error: null
    }
  // }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(data => {
      this.setState({
      info: data
    })
  })
  }


  render(){
    console.log(this.state.info.data)

    // const { info, isLoading, error } = this.state;

    // const infoIterator = this.state.info.data.map(info => {
    //   return <li key={info.id}>Something testing</li>
    // })

    // if (error) {
    //   return <p>{error.message}</p>;
    // }
    //
    // if (isLoading) {
    //   return <p>Loading...</p>;
    // }

    return (
      <div className="App">
        New Request
        <ul>This is where state goes:
        </ul>
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
