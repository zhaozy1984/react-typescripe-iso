import * as React from "react";
export default class AddTodo extends React.Component<{onAddClick}, {value}> {
  constructor(props) {
    super(props);
    this.state={value:""};
  }
  public render(){
    return (
      <div>
        <input value={this.state.value} type='text' onChange={(e)=>{this.setState({value:e.target.value.trim()})}} />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }
  public handleClick(e) {
    const text = this.state.value;
    this.props.onAddClick(text)
    this.setState({value:""});
  }
}