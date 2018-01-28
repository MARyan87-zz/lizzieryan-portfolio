import React from 'react';
import './Work.css';
import ContentTitle from '../Composed/ContentTitle';

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
        <ContentTitle />
        <h1>work</h1>
      </div>
    )
  }
}

export default Work;