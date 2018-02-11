import React from 'react';
import ContentTitle from '../Composed/ContentTitle';
import MainFont from '../Primitives/MainFont';
import Job from './Job';
import School from './School';
import './Resume.css';

class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='page-content resume'>
        <ContentTitle />
        <img className='resume-img' alt='Lizzie Ryan' src='assets/img/lizzie.jpeg' />
        <div className='section-title'>
          <MainFont options={{size: 'md', bold: true}} text='Experience'/>
        </div>
        {this.props.jobs.map((job, i) => (
          <Job data={job} key={i} />
        ))}
        <div className='section-title'>
          <MainFont options={{size: 'md', bold: true}} text='Education'/>
        </div>
        <div>
          {this.props.education.map((school, i) => (
            <School data={school} key={i} />
          ))}
        </div>
        <div className='section-title'>
          <MainFont options={{size: 'md', bold: true}} text='Skills'/>
        </div>
        {this.props.skills.map((skill, i) => (
          <MainFont options={{size: 'sm'}} text={skill} key={i} />
        ))}
        <div className='section-title'>
          <MainFont options={{size: 'md', bold: true}} text='Affiliations'/>
        </div>
        {this.props.affiliations.map((aff, i) => (
          <MainFont options={{size: 'sm'}} text={aff} key={i} />
        ))}

        <div className='references'>
          <MainFont options={{size:'sm', color: 'teal', bold: true}} text='References Available Upon Request' />
        </div>
      </div>
    );
  }
}

export default Resume;