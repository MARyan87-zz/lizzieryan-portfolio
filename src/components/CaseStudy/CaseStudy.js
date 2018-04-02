import React from 'react';
import {Link} from 'react-router-dom';
import {URL_MAP, lookupStudy} from "../../constants";

import StudyTemplate from '../Composed/StudyTemplate';
import MainFont from '../Primitives/MainFont';
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
                <img className='case-study' src={`/assets/img/${this.props.match.params.study}-1.png`}/>
                <div className='text-center prototype-link'>
                    <a href={lofiUrl} target='_blank'>
                        <MainFont options={{size: 'tiny', color: 'teal'}} text='Click here to see the prototype'/>
                    </a>
                </div>
                <img className='case-study' src={`/assets/img/${this.props.match.params.study}-2.png`}/>
                <div className='text-center prototype-link'>
                    <a href={hifiUrl} target='_blank'>
                        <MainFont options={{size: 'tiny', color: 'teal'}} text='Click here to see the high fidelity prototype'/>
                    </a>
                </div>
                <img className='case-study' src={`/assets/img/${this.props.match.params.study}-3.png`}/>
                <div className='back-to-top text-right'>
                    <a href='#'><MainFont options={{size:'sm', bold: true, color: 'teal'}} text="Back to top ^"/></a>
                </div>
                <StudyTemplate next study={nextStudy.study} title1={nextStudy.title1} description={nextStudy.description} img={nextStudy.img} />
            </div>
        );
    }
}

export default CaseStudy;