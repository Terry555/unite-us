import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';


const APIGET = `http://localhost:49567/api/service-types`
const APIPOST = `http://localhost:49567/api/assistance-requests`



class FormClass extends React.Component {

    state = {
      info: [],
      checked: false,
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
    if (this.state.checked){
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
      } else {
        alert("Must agree to terms of service.")
      }
  }

  changeFunction = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  isChecked = (event) => {
    event.preventDefault()
    this.setState({
      checked: event.target.checked
    })
  }


  render(){
    console.log(this.state.info)
    return (
        <Form className="whole-form" onSubmit={this.submitFunction}> New Assistance Request
          <Col>
            <Form.Group controlId="exampleForm">
              <Form.Label>
                <Form.Control onChange={this.changeFunction} type="input" name="firstName" value={this.state.firstName} placeholder="First Name"/>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Form.Control onChange={this.changeFunction} type="input" name="lastName" value={this.state.lastName} placeholder="Last Name"/>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Form.Control onChange={this.changeFunction} type="input" name="email" value={this.state.email} placeholder="Email Address"/>
              </Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>Select Service Type:
                  <select onChange={this.changeFunction} name="selectData" value={this.state.selectData} placeholder="Service Type">
                    {this.state.info.map((item, id) => {
                        return <option key={id}>{item.display_name}</option>
                      })}
                  </select>
                </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
              <Form.Control type="textarea" onChange={this.changeFunction} name="textData" value={this.state.textData}/>
              </Form.Label>
          </Form.Group>
            <Form.Group><Form.Check type="checkbox" checked={this.state.checked} onChange={this.isChecked} label="I hereby accept the terms of service for THE NETWORK and the Privacy Policy"/></Form.Group>
            <Form.Group><Button type="submit">Get Assistance</Button></Form.Group>
          </Col>
        </Form>
    )
  }



}

export default FormClass
