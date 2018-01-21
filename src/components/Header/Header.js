import React from 'react';
import MainFont from '../Primitives/MainFont';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='header standard-margin'>
        <MainFont options={{bold: true, size:'md', uppercase: true, spacing: true}} text={'Lizzie Ryan'} />
        <div className='nav'>
          <ul>
            <li>
              <MainFont options={{bold: true, size: 'sm', lowercase: true}} link="#" text={'work'}/>
            </li>
            <li>
              <MainFont options={{bold: true, size: 'sm', lowercase: true}} link="#" text={'resume'}/>
            </li>
            <li>
              <MainFont options={{bold: true, size: 'sm', lowercase: true}} link="#" text={'contact'}/>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;



