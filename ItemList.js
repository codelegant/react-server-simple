import React,{PropTypes} from 'react';
module.exports = class LinkButton extends React.Component {
  static propTypes={
    items:PropTypes.arrayOf(PropTypes.string)
  };
  constructor(props) {
    super(props);
    this.state = {
      items:props.items
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.setState({
      items:this.state.items.concat(`Item ${this.state.items.length+1}`)
    });
  }

  render() {
    return (
      <div>
      <button type="button" onClick={this.handleClick}>Add Item</button>
      <ul>
      {this.state.items.map((item,index)=><li key={index}>{item}</li>)}
      </ul>
      </div>
    );
  }
}