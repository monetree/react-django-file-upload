import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      profilePic: null,
    };
    this.inpuElement = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({profilePic: e.target.files[0]});
  }
  handleSubmit(){
    let formData = new FormData();
    formData.append('profile_pic',this.state.profilePic);
    fetch('http://127.0.0.1:8000/get_file/', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*'
      },
      body:formData,
    }).then(res => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  render(){
      return(
        <div>
          <input
            type="file"
            multiple={false}
            ref={(input) => { this.inpuElement = input; }}
            accept=".jpg,.jpeg,.png,.pdf,.doc"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}
export default App;
