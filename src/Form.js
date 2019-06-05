import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';


const APIGET = `http://localhost:49567/api/service-types`
const APIPOST = `http://localhost:49567/api/assistance-requests`



class FormClass extends React.Component {

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
            response.json().then(data => {
              alert(data.message)
            })
        })
        .then(this.setState({
          firstName: '',
          lastName: '',
          email: '',
          selectData: 'Benefits',
          textData: ''
        }))
  }

  changeFunction = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })

  }


  render(){

    return (
        <Form onSubmit={this.submitFunction}>
          <Col>
          <Form.Group>
          <Form.Label>First Name:
            <Form.Control onChange={this.changeFunction} type="input" name="firstName" value={this.state.firstName}/>
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>Last Name:
            <Form.Control onChange={this.changeFunction} type="input" name="lastName" value={this.state.lastName}/>
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>Email Address:
            <Form.Control onChange={this.changeFunction} type="input" name="email" value={this.state.email}/>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Select Service Type:
            <select onChange={this.changeFunction} name="selectData" value={this.state.selectData}>
              {this.state.info.map((item, id) => {
                  return <option key={id}>{item.display_name}</option>
                })}
            </select>
          </Form.Label>
        </Form.Group>
          <textarea onChange={this.changeFunction} name="textData" value={this.state.textData} placeholder="type request here"></textarea>
          <button type="submit">Submit</button>
          </Col>
        </Form>
    )
  }



}

export default FormClass
