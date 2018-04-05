import React from 'react';
import {Link} from 'react-router-dom';
import {URL_MAP, lookupStudy} from "../../constants";

import StudyTemplate from '../Composed/StudyTemplate';
import Zeit from '../CaseStudy/Zeit';
import './CaseStudy.css';

class CaseStudy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let hifiUrl = URL_MAP[this.props.match.params.study].hifi;
        let lofiUrl = URL_MAP[this.props.match.params.study].lofi;

        let nextStudy = lookupStudy(this.props.match.params.study);


        return (
            <div className='case-study-container'>
                {this.props.match.params.study === 'Zeit-Case-Study' &&
                    <Zeit />
                }

                <StudyTemplate next study={nextStudy.study} title1={nextStudy.title1} description={nextStudy.description} img={nextStudy.img} />
            </div>
        );
    }
}

export default CaseStudy;