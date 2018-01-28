import React from 'react';
import MainFont from '../Primitives/MainFont';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='header standard-margin'>
        <MainFont options={{bold: true, size:'lg', uppercase: true, spacing: true}} text={'Lizzie Ryan'} />
        <div className='nav'>
          <ul>
            <li>
              <Link to="/">
                <MainFont options={{bold: true, size: 'md', lowercase: true}} text={'work'}/>
              </Link>
            </li>
            <li>
              <Link to="/Resume">
                <MainFont options={{bold: true, size: 'md', lowercase: true}} text={'resume'}/>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <MainFont options={{bold: true, size: 'md', lowercase: true}} text={'contact'}/>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;



