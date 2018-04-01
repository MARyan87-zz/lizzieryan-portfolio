import React from 'react';
import './Work.css';
import ContentTitle from '../Composed/ContentTitle';
import MainFont from '../Primitives/MainFont';
import {Link} from 'react-router-dom';

class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='page-content'>
        <ContentTitle />
        <div className='work-content'>
          <div className='work-img'>
            <img src='assets/img/ZRG.png' />
          </div>
          <div className='recent-work'>
            <div className='recent-work-title'>
              <MainFont options={{size:'lg', bold: true}} text="Recent Work"/>
            </div>
            <div className='work-item-title'>
              <MainFont options={{size:'md', bold: true, color: 'grey'}} text="Time Travel Booking"/>
              <MainFont options={{size:'md', bold: true, color: 'grey'}} text="Website - Zeit"/>
            </div>
            <div className='work-description'>
              <MainFont options={{size:'tiny', color: 'grey'}} text="For a company that pushes new technology, trust building with users is crucial.  Applying user experience design principles, I conducted user research and designed an experience across devices to facilitate increased commerce and return visitors for this time travel booking brand." />
            </div>
            <div className='read-study'>
              <Link to={'/CaseStudy/Zeit-Case-Study'}>
                <MainFont options={{size:'sm', bold: true, color: 'teal'}} text="Read Case Study >"/>
              </Link>
            </div>
            <div className='back-to-top'>
              <a href='#'><MainFont options={{size:'sm', bold: true, color: 'teal'}} text="Back to top ^"/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;