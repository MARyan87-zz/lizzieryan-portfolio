import React from 'react';
import MainFont from '../Primitives/MainFont';

class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='job'>
        <div className='job-title'>
          <MainFont options={{bold: true, size: 'sm'}} text={this.props.data.title} />
          <div className='location-duration'>
            <span>
              <MainFont options={{bold: true, size: 'sm'}} text={this.props.data.location} />
            </span>
            <span>
              <MainFont options={{bold: true, size: 'sm'}} text={this.props.data.duration} />
            </span>
          </div>
        </div>
        <ul>
          {this.props.data.duties.map((duty, i) => (
            <li key={i}>
              <MainFont options={{size: 'sm'}} text={duty} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Job;