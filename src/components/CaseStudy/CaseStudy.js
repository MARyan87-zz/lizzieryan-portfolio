import React from 'react';
import {lookupStudy} from "../../constants";

import StudyTemplate from '../Composed/StudyTemplate';
import Zeit from '../CaseStudy/Zeit';
import SpotifySquare from '../CaseStudy/Spotify-Square';
import './CaseStudy.css';

class CaseStudy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let nextStudy = lookupStudy(this.props.match.params.study);

        return (
            <div className='case-study-container'>
                {this.props.match.params.study === 'Zeit-Case-Study' &&
                    <Zeit />
                }

                <StudyTemplate next showBackTop study={nextStudy.study} title1={nextStudy.title1} description={nextStudy.description} img={nextStudy.img} />
            </div>
        );
    }
}

export default CaseStudy;