import React, {Component} from 'react';

class NewTask extends Component{
    constructor(){
        super();
        this.state={
            input:''
        }
    }

    handleChange=(e)=>this.setState({input:e})

    handleAdd=()=>{
        this.props.add(this.state.input)
        this.setState({input:''})
    }

    render(){
        return(
            <div>
                <input  value={this.state.input}
                        placeholder="Enter new task"
                        onChange={(e)=>this.handleChange(e.target.value)}
                />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask;