import React from 'react';
module.exports = class LinkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: props.liked };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>Toggle Text</button>
      <p>
        You {this.state.liked ? 'like' : 'havent\'t liked'} this.Click to toggle.
      </p>
      </div>
    );
  }
}