import React from 'react';

import './CaseStudy.css';

class CaseStudy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props);
        return (
            <img className='case-study' src={`/assets/img/${this.props.match.params.study}.png`}/>
        );
    }
}

export default CaseStudy;