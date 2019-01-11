import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
        this.setUsername=this.setUsername.bind(this);
        this.setPassword=this.setPassword.bind(this);
        this.loginPrompt=this.loginPrompt.bind(this);
    }

    setUsername(e){
        this.setState({username:e})
    }

    setPassword(e){
        this.setState({password:e})
    }

    loginPrompt(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }


    render(){
        // console.log(this.state.username, this.state.password)
        return(
            <div>
                <input placeholder='username' onChange={(e)=>this.setUsername(e.target.value)} />
                <input placeholder='password' onChange={(e)=>this.setPassword(e.target.value)}/>
                <button onClick={this.loginPrompt}>Login</button>
            </div>
        )
    }
}

export default Login