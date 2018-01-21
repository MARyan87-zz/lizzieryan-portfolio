import React from 'react';
import MainFont from '../Primitives/MainFont';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='footer standard-margin'>
        <div className='footer-left'>
          <div>
            <MainFont options={{bold: true, size:'md', uppercase: true, spacing: true, color: 'white'}} text='Lizzie Ryan' />
            <MainFont red={true} options={{size: 'xs', color: 'white', additionalClass: 'copywrite'}} text='&copy; 2018 Lizzie Ryan'/>
          </div>
          <div>
            <img src='assets/img/linkedin.png' />
          </div>
        </div>
        <div className='footer-right'>
          <MainFont options={{bold: true, size: 'xs', lowercase: true, color: 'white'}} text='lizzieryandesign@gmail.com'/>
        </div>
      </section>
    );
  }
}

export default Footer;



