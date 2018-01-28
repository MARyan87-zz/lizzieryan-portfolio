import React from 'react';
import MainFont from '../Primitives/MainFont';

class School extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='school'>
        <div className='location-duration'>
          <span>
            <MainFont options={{bold: true, size: 'sm'}} text={this.props.data.name} />
          </span>
          <span>
            <MainFont options={{bold: true, size: 'sm'}} text={this.props.data.duration} />
          </span>
        </div>
          <div>
          <span>
            <MainFont options={{bold: true, size: 'sm'}} text={this.props.data.location} />
          </span>
        </div>
        <div>
          <MainFont options={{bold: true, size: 'sm'}} text={this.props.data.degree} />
        </div>
      </div>
    );
  }
}

export default School;