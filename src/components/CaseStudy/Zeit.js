import React from 'react';

import MainFont from '../Primitives/MainFont';
import SecondaryFont from '../Primitives/SecondaryFont';
import './Zeit.css';

class Zeit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='zeit'>
                <img className='header-img' src={'/assets/img/zeit/Header.png'} />
                <div className='text-center padding-40'>
                    <MainFont options={{bold: true, size:'lg'}} text={'Responsive Travel Booking Site'} />
                    <SecondaryFont options={{bold: true, size:'lg', color: 'grey', italic: true}} text={'a case study'} />
                </div>
                <div className='text-center background-grey'>
                    <div className='small-sections'>
                        <MainFont options={{bold: true, size:'md', color: 'teal'}} text={'Target User'} />
                        <MainFont options={{size:'tiny', color: 'grey'}} text={'First time travelers who many have recently graduated from college with a limited budget and active social media profiles.'}/>
                    </div>
                    <div className='small-sections'>
                        <MainFont options={{bold: true, size:'md', color: 'teal'}} text={'Goal'} />
                        <MainFont options={{size:'tiny', color: 'grey'}} text={'Design a user experience most comfortable to target users in style and task flow.'}/>
                    </div>
                    <div className='small-sections'>
                        <MainFont options={{bold: true, size:'md', color: 'teal'}} text={'My Role'} />
                        <MainFont options={{size:'tiny', color: 'grey'}} text={'User Research, Design, Testing'}/>
                    </div>
                    <div className='duration'>
                        <MainFont options={{size: 'tiny', bold: true}} text={'Project duration: 80 hours'}/>
                    </div>
                </div>
                <div className='icons-container text-center'>
                    <div className='icon-column'>
                        <img src={'/assets/img/icons/Research-Icon.png'}/>
                        <MainFont options={{size: 'md', bold: true, color: 'grey'}} text={'Research'}/>
                        <ul>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Secondary Research'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Competitor Analysis'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'1-on-1 Interviews'}/></li>
                        </ul>
                    </div>
                    <div className='icon-column'>
                        <img src={'/assets/img/icons/Strategy-Icon.png'}/>
                        <MainFont options={{size: 'md', bold: true, color: 'grey'}} text={'Strategy'}/>
                        <ul>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Card Sort'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Personas'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Empathy Map'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Site Map'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'User Flows'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Task Flow'}/></li>
                        </ul>
                    </div>
                    <div className='icon-column'>
                        <img src={'/assets/img/icons/Interaction-Design-Icon.png'}/>
                        <MainFont options={{size: 'md', bold: true, color: 'grey'}} text={'Interaction Design'}/>
                        <ul>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Wireframes'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Prototype'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Usability Testing'}/></li>
                        </ul>
                    </div>
                    <div className='icon-column'>
                        <img src={'/assets/img/icons/UI-Design-Icon.png'}/>
                        <MainFont options={{size: 'md', bold: true, color: 'grey'}} text={'User Interface Design'}/>
                        <ul>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Style Guide'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Responsive Pages'}/></li>
                        </ul>
                    </div>
                </div>
                <div className='project-summary'>
                    <div className='project-summary-container'>
                        <SecondaryFont options={{bold: true, size:'lg', color: 'white', italic: true}} text={'Project Summary'} />
                        <MainFont options={{size: 'xs', color: 'white'}} text={'Zeit, a new travel booking company specializing in time travel, needed to extend their customer base to include first time travellers by gaining their trust for the new technology while booking the travel online.'} />
                        <MainFont options={{size: 'xs', color: 'white'}} text={'Research indicated that young, educated people are most likely to prefer unique vacations over a structured tour.'} />
                        <MainFont options={{size: 'xs', color: 'white'}} text={'With this insight in mind, a method of searching space and time for vacations was created that is effortless and intuitive, allowing users to trust time travel technology and book travel at a time and place convenient for them.'} />
                    </div>
                </div>
                <div className='process'>
                    <div className='process-container'>
                        <SecondaryFont options={{bold: true, size:'lg', color: 'teal', italic: true}} text={'Process'} />
                            <img src={'/assets/img/icons/Research-Icon.png'}/>
                            <MainFont options={{size: 'md', bold: true, color: 'grey'}} text={'Research'}/>
                            <MainFont options={{size: 'xs'}} text={'For the Zeit project it was very important to understand the current market for unique, affordable vacation booking, how they would like to experience booking the vacation itself, and to ensure they trusted the brand new technology. 6 people were interviewed during the research phase and it was found that their answers were very similar. The majority of the people interviewed typically book one vacation a year and were most excited to learn about the new technology.'} />
                            <img src={'/assets/img/icons/Strategy-Icon.png'}/>
                            <MainFont options={{size: 'md', bold: true, color: 'grey'}} text={'Strategy'}/>
                            <MainFont options={{size: 'xs'}} text={'At this stage a primary persona was developed based on the user research data collected during the 1-on-1 interviews. This key customer segment addresses the major needs and frustrations of the main user group. The persona focuses on "Katie," a young, single college graduate who typically books one "off the beaten path" vacation a year. She finds it frustrating when the grocery store she usually goes to gets busy and she is stuck waiting in the checkout line. She wishes that there was a quicker and easier way so that she can get on with her day.'}/>
                    </div>
                </div>
                <div className='flex-center'>
                    <img className='standard-img' src='/assets/img/zeit/Persona.png'/>
                </div>
                <div className='quote background-grey'>
                    <SecondaryFont options={{bold: true, size:'lg', italic: true}} text={'"I could experience the things I learned in college first hand."'} />
                </div>
                <div className='flex-center'>
                    <div className='width-50'>
                    <MainFont options={{size: 'xs'}} text={'Using the data collected in the research phase, an empathy map was created for "Katie" in order to capture her current needs and to help better understand how she wants to book her vacation'} />
                    </div>
                </div>
                <div className='flex-center empathy-map'>
                    <img className='standard-img' src='/assets/img/zeit/Empathy-Map.png'/>
                </div>
                <div className='flex-center'>
                    <div className='width-50'>
                        <MainFont options={{size: 'xs'}} text={'To help us understand how to organize the navigation process of booking a trip on the Zeit site a card sorting workshop was conducted with participants. The participants were asked to sort 25 possible pages and then group and categorize them in a way that would be natural to them.  They were also given blank cards to freely add any pages that make sense to them.'} />
                    </div>
                </div>
                <div className='flex-center card-sort'>
                    <img className='width-50' src='/assets/img/zeit/Card-Sort-Image.png'/>
                </div>
                <div className='margin-50 text-center'>
                    <MainFont options={{size: 'xs'}} text={'Using the card sort results, the sitemap was created, along with user and task flows.'}/>
                </div>
                <div className='flex-center flex-column flex-align'>
                    <img className='sitemap width-75' src='/assets/img/zeit/Sitemap.png' />
                    <img className='taskflow width-75' src='/assets/img/zeit/Zeit-Task-Flow.png' />
                </div>
            </div>
        );
    }
}

export default Zeit;