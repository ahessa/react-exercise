import './App.css';
import React from 'react';

class UserForm extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',  
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        
        this.setState({
            firstName: event.target.props.firstName,
            lastName: event.target.props.lastName
        });
      }
    
      handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
              <input type="text" value={this.props.firstName} onChange={this.handleChange} />
            </label>
            <br/>
            <label>
              Last Name:
              <input type="text" value={this.props.lastName} onChange={this.handleChange} />
            </label>
            <br/>
            <label>
          Select your Canton:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="zurich">Zurich</option>
            <option value="basel">Basel</option>
            </select>
            </label>
            <br/>
        <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default UserForm;