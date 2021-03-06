import React,{Component} from 'react';
import './style.css';


class LoginForm extends Component {
    userData;
    constructor(props) {
      super(props);
      let userData = JSON.parse(localStorage.getItem('user'));
      this.state = {
        userData:userData,
        fields: {},
        errors: {},
        register:false,
        home:false
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
     if(this.state.fields.username===this.state.userData.fields.username && this.state.fields.password===this.state.userData.fields.password){
      this.props.history.push('/Home')
     }
     else{
       alert("Username or password in correct")
     }
    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }
    handleClick=()=>{
      this.setState({
        register:true
      })
    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Login page</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Name</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button"  value="LogIn"/>
        </form>
        <h3>Not Register yet,register now.</h3>
        <button className="button" onClick={()=>this.handleClick()}>Register</button>
        {
          (this.state.register)?
          this.props.history.push('/RegisterPage'):""
        }
        
    </div>
</div>

      );
  }


}


export default LoginForm;