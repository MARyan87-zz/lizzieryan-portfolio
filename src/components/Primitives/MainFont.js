import React from 'react';

class MainFont extends React.Component {
  constructor(props) {
    super(props);

    this.createClass = this.createClass.bind(this);
  }

  createClass() {
    let className = 'main-font';
    let opts = this.props.options;

    if (opts.size) {
      if (opts.size === 'xl') {
        className += ' font-xl';
      } else if (opts.size === 'md') {
        className += ' font-md';
      }
    }

    if (opts.bold) {
      className += ' bold';
    }

    if (opts.uppercase) {
      className += ' uppercase';
    }

    if (opts.lowercase) {
      className += ' lowercase';
    }

    if (opts.spacing) {
      className += ' spacing';
    }

    return className;
  }

  render() {
    let className = this.createClass();

    if (!this.props.link) {
      return (
        <p className={className}>{this.props.text}</p>
      );
    } else {
      return (
        <a className={className} href={this.props.link}>{this.props.text}</a>
      );
    }

  }
}

export default MainFont;