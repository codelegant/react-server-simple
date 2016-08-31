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
      <p onClick={this.handleClick}>
        You {this.state.liked ? 'like' : 'havent\'t liked'} this.Clicd to toggle.
      </p>
    );
  }
}