import React from 'react';
import './Work.css';
import ContentTitle from '../Composed/ContentTitle';
import MainFont from '../Primitives/MainFont';
import StudyTemplate from '../Composed/StudyTemplate';

class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='page-content'>
        <ContentTitle />
        <div className='work-content'>
            <StudyTemplate study={'Zeit-Case-Study'} showRecentWork img={'assets/img/zeit/Zeit-mockups.png'} title1='Time Travel Booking' title2='Website - Zeit' description='"For a company that pushes new technology, trust building with users is crucial.  Applying user experience design principles, I conducted user research and designed an experience across devices to facilitate increased commerce and return visitors for this time travel booking brand."' />
            <StudyTemplate study={'Marlowe-Case-Study'} img={'assets/img/marlowe/Marlowe-mockups.png'} title1='Responsive Website #2' description='"For our next project we will upgrade the website of a local tattoo shop, making it responsive and creating a new appointment booking form in order to streamline the process for the shop management and artists."' />
            <div className='back-to-top text-right'>
                <a href='#'><MainFont options={{size:'sm', bold: true, color: 'teal'}} text="Back to top ^"/></a>
            </div>
        </div>
      </div>
    )
  }
}

export default Work;