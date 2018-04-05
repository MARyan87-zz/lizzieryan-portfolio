import React from 'react';

class SecondaryFont extends React.Component {
  constructor(props) {
    super(props);

    this.createClass = this.createClass.bind(this);
  }

  createClass() {
    let className = 'secondary-font';
    let opts = this.props.options;

    if (opts.size) {
      if (opts.size === 'xl') {
        className += ' font-xl';
      } else if (opts.size === 'lg') {
        className += ' font-lg';
      } else if (opts.size === 'md') {
        className += ' font-md';
      } else if (opts.size === 'sm') {
        className += ' font-sm';
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

    if (opts.color === 'grey') {
      className += ' grey';
    }

    if (opts.color === 'white') {
      className += ' white';
    }

      if (opts.color === 'teal') {
          className += ' teal';
      }

    if (opts.italic) {
      className += ' italic';
    }

    return className;
  }

  render() {
    let className = this.createClass();

    return (
        <p className={className}>{this.props.text}</p>
    );
  }
}

export default SecondaryFont;