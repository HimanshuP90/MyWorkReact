import React from 'react';

class SignupForm extends React.Component {
  render() {
    return (
      <form>
        <h1> Signup!</h1>
         <div className="form-group">
          <label className="control-label" Username> </label>
          <input
          type = "text"
          name = "username"
          className = "form-control"
          />
          </div>
          <div className="form-group">
           <button className="btn btn-primary btn-lg">
           Signup
           </button>
      </form>
    );
  }
}

export default SignupForm;
