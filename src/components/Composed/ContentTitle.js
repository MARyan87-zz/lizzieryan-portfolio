import React from 'react';
import MainFont from '../Primitives/MainFont';
import SecondaryFont from '../Primitives/SecondaryFont';

class ContentTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-title">
        <MainFont options={{size:'lg', bold: true}} text="UX Designer"/>
        <SecondaryFont options={{size: 'md', lowercase: true, color: 'grey', italic: 'true'}} text='& researcher'/>
      </div>
    )
  }
}

export default ContentTitle;