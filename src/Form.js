import React from 'react';


class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      info: [],
      isLoading: false,
      error: null
    }
  }



  render(){
    console.log(this.state.info.data)

    const { info, isLoading, error } = this.state;

    const infoIterator = this.state.info.data.map(info => {
      return <li key={info.id}>Something testing</li>
    })

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        New Request
        <ul>This is where state goes:
          {infoIterator}
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

  componentDidMount(){
    this.setState({ isLoading: true })
    fetch('http://localhost:49567/api/service-types')
    .then(response => {
      if (response.ok){
        return response.json();
      } else {
        throw new Error('Something went wrong...');
      }
    })
    .then(data => {
      this.setState({
        info: data,
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false }))
  }

}

export default Form
