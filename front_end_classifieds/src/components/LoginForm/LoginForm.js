import React, { Component } from 'react';
import loginForm from '../../config_files/login_form_config'
import {
  Button,
} from 'reactstrap';
import {
  Link
} from "react-router-dom";
import FormComponent from '../form/input';
import { connect } from 'react-redux';

class LoginFrom extends Component {

  render() {
    return (
      <div>
        {loginForm.map(formElements => <FormComponent
          key={formElements.label_for}
          generalType={formElements.generalType}
          input_name={formElements.input_name}
          type={formElements.type}
          label_for={formElements.label_for}
          title={formElements.label_for}
        />)}
        <Button id="login" >
          Submit
        </Button>
        <Button id="register">
          <Link to={'/admin/register'}>Register</Link>
        </Button>
      </div>
    )
  }

}


export default connect(null, null)(LoginFrom)