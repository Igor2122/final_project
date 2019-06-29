import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Spinner } from 'reactstrap';
import getJwt from '../../../utilites/jwt';
import FormComponent from '../../../components/form/input';
import registrationFromSettings from '../../../config_files/registrationForm';
import * as actionTypes from '../../../store/actions/acitonConst';

import { Redirect, Link } from "react-router-dom";

class RegistrationPage extends Component {

  state = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }

  componentDidMount() {

    if (getJwt()) {
      this
        .props
        .userLoggedInStatus();
    }
  }

  getUserInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    console.log(this.state)



  return (
      <div>
        <h1>Registration Page</h1>
        <div>
          {registrationFromSettings.map(formElements => <FormComponent
            key={formElements.label_for}
            generalType={formElements.generalType}
            input_name={formElements.input_name}
            type={formElements.type}
            label_for={formElements.label_for}
            title={formElements.label_for}
            formdata={(e) => this.getUserInput(e)} />)}
          <Button onClick={this.checkForLoggedInUser}>Register</Button>
          <Button>
            <Link to="/admin/login">Login</Link>
          </Button>
        </div>
      </div>
    );
  }
}





export default connect(null, null)(RegistrationPage);