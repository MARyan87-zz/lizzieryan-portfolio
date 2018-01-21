import React from 'react';
import './Work.css';

//Components
import MainFont from '../Primitives/MainFont';
import SecondaryFont from "../Primitives/SecondaryFont";

class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="work-header">
          <SecondaryFont options={{size:'md', bold: true}} text="UX Designer"/>
          <SecondaryFont options={{size: 'sm', lowercase: true, color: 'grey'}} text='& researcher'/>
        </div>
      </div>
    )
  }
}

export default Work;