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
import * as actions from '../../store/actions'

class LoginFrom extends Component {


  state = {
    email: '',
    password: ''
  }

  setUserInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {loginForm.map(formElements => <FormComponent
          key={formElements.label_for}
          generalType={formElements.generalType}
          input_name={formElements.input_name}
          type={formElements.type}
          label_for={formElements.label_for}
          title={formElements.label_for}
          formdata={(e) => this.setUserInput(e)}
        />)}
        <Button onClick={() => this.props.submitLogin(this.state)} id="login" >
          Submit
        </Button>
        <Button id="register">
          <Link to={'/admin/register'}>Register</Link>
        </Button>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    submitLogin: (data) => dispatch(actions.loginPost(data))
  }
}


export default connect(null, mapDispatchToProps)(LoginFrom)