import { Component } from 'react';

export class AddUserForm extends Component {
  state = {
    name: '',
    email: '',
  };

handleChange = ({target: {value, name}}) => {
   this.setState(
    {[name]: value},
   )
}

handleSubmit = (event) => {
    event.preventDefault();
    this.props.AddUserForm(
        {...this.state}
    )
    this.setState({
        name: '',
        email: '',
    })
} 


  render() {
    const {name, email} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          {' '}
          Email
          <input name="email" value={email} onChange={this.handleChange} />
        </label>
        <button tupe="button">Save</button>
      </form>
    );
  }
}
