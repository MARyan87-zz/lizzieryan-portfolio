import React from 'react';

import MainFont from '../Primitives/MainFont';
import SecondaryFont from '../Primitives/SecondaryFont';
import './Marlowe.css';

class Marlowe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='marlowe'>
                <img className='header-img' src={'/assets/img/marlowe/Header.png'} />
                <div className='text-center padding-40'>
                    <MainFont options={{bold: true, size:'lg'}} text={'Responsive Tattoo Shop Site'} />
                    <SecondaryFont options={{bold: true, size:'lg', color: 'grey', italic: true}} text={'a case study'} />
                </div>
                <div className='text-center background-grey'>
                    <div className='small-sections'>
                        <MainFont options={{bold: true, size:'md', color: 'teal'}} text={'Target User'} />
                        <MainFont options={{size:'tiny', color: 'grey'}} text={'Tattoo collectors who may have recently booked a tattoo consultation with a custom only tattoo shop.'}/>
                    </div>
                    <div className='small-sections'>
                        <MainFont options={{bold: true, size:'md', color: 'teal'}} text={'Goal'} />
                        <MainFont options={{size:'tiny', color: 'grey'}} text={'Design a user experience most comfortable for target users in style and task flow.'}/>
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
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Personas'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Empathy Map'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Site Map'}/></li>
{/* TODO: Mockup says "User Flow" in Marlowe and "User Flows" in Zeit. Should these be consistent? */}
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'User Flow'}/></li>
                        </ul>
                    </div>
                    <div className='icon-column'>
                        <img src={'/assets/img/icons/Interaction-Design-Icon.png'}/>
                        <MainFont options={{size: 'md', bold: true, color: 'grey'}} text={'Interaction Design'}/>
                        <ul>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Wireframes'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Prototype'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Usability Testing'}/></li>
                            <li><MainFont options={{size: 'tiny', color: 'grey'}} text={'Affinity Map'}/></li>
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
                        <MainFont options={{size: 'xs', color: 'white'}} text={'Marlowe Ink, a local tattoo shop specializing in custom tattoos, needed a way for potential customers to communicate their design ideas virtually before booking a consultation appointment.'} />
                        <MainFont options={{size: 'xs', color: 'white'}} text={'Research indicated that while the tattooer-client interaction had to include a one-on-one meeting before the tattoo appointment was booked, the artists at Marlowe have no way of knowing the tattoo design prior to booking the consultation appointment.'} />
                        <MainFont options={{size: 'xs', color: 'white'}} text={'With this insight in mind, a method of uploading reference artwork and a summary of the tattoo idea along with the contact info of the potential client was developed.'} />
                    </div>
                </div>
                <div className='process'>
                    <div className='process-container'>
                        <SecondaryFont options={{bold: true, size:'lg', color: 'teal', italic: true}} text={'Process'} />
                            <img src={'/assets/img/icons/Research-Icon.png'}/>
                            <MainFont options={{size: 'md', bold: true, color: 'grey'}} text={'Research'}/>
                            <MainFont options={{size: 'xs'}} text={'For the Marlowe project it was very important to understand the current market for custom tattoos, and the process by which clients book appointments for them. Four people were interviewed during the research phase and it was found that their answers were very similar. The majority of the people interviewed typically book a consultation appointment over the phone and do not usually explain their idea to the artist until meeting in person.'} />
                            <img src={'/assets/img/icons/Strategy-Icon.png'}/>
                            <MainFont options={{size: 'md', bold: true, color: 'grey'}} text={'Strategy'}/>
                            <MainFont options={{size: 'xs'}} text={'At this stage a primary persona was developed based on the user research data collected during the 1-on-1 interviews. This key customer segment addresses the major needs and frustrations of the main user group. The persona focuses on “Jordan,” a young, single software engineer who wants to find the perfect artist to do his tattoo. He wishes that there was a way to share his idea with the potential artist before he makes the trip all the way to the tattoo shop for a consultation.'}/>
                    </div>
                </div>
                <div className='flex-center'>
                    <img className='persona-img' src='/assets/img/marlowe/Persona.png'/>
                </div>
                <div className='quote background-grey'>
                    <SecondaryFont options={{bold: true, size:'lg', italic: true}} text={'"I need to find the perfect tattoo artist to do my sleeve."'} />
                </div>
                <div className='flex-center'>
                    <div className='width-50'>
                    <MainFont options={{size: 'xs'}} text={'Using the data collected in the research phase, an empathy map was created for “Jordan” in order to capture his current needs and to help better understand how he wants to book his tattoo appointment.'} />
                    </div>
                </div>
                <div className='flex-center empathy-map'>
                    <img src='/assets/img/marlowe/Empathy-Map.png'/>
                </div>
                <div className='flex-center'>
                    <div className='one-on-one'>
                        <MainFont options={{size: 'xs'}} text={'Using the 1-on-1 interview results, the sitemap was created, along with a user flow.'} />
                    </div>
                </div>
                <div className='flex-center card-sort'>
                    <img src='/assets/img/marlowe/Sitemap.png'/>
                </div>
                <div className='flex-center flex-column flex-align user-flow'>
                    <img src='/assets/img/marlowe/User Flow.png' />
                </div>
              <div className='interaction-icon width-50'>
                <img src={'/assets/img/icons/Interaction-Design-Icon.png'}/>
                <MainFont options={{size: 'md', bold: true, color: 'grey'}} text={'Interaction Design'}/>
                <MainFont options={{size: 'xs'}} text={'Marlowe’s wireframes were designed with a mobile first design, as the users we focused on tend to use mobile devices. Paper sketches were made based on the user flow, prior to creating higher fidelity versions in Sketch.'} />
              </div>
              <div className='site-div'>
                <img src='/assets/img/marlowe/HP Large Screen Wireframe.png'/>
                <img className="img-height" src='/assets/img/marlowe/HP Medium Screen Wireframe.png'/>
                <img className="img-height" src='/assets/img/marlowe/HP Small Screen Wireframe.png'/>
              </div>
              <div className='site-div'>
                <img src='/assets/img/marlowe/Artists Large Screen Wireframe.png'/>
                <img className="img-height" src='/assets/img/marlowe/Artists Medium Screen Wireframe.png'/>
                <img className="img-height" src='/assets/img/marlowe/Artists Small Screen Wireframe.png'/>
              </div>
              <div className='site-div'>
                <img src='/assets/img/marlowe/Artist Large Screen Wireframe.png'/>
                <img className="img-height" src='/assets/img/marlowe/Artist Medium Screen Wireframe.png'/>
                <img className="img-height" src='/assets/img/marlowe/Artist Small Screen Wireframe.png'/>
              </div>
              <div className='width-50 ui-design'>
                <MainFont options={{size: 'xs'}} text={'A mid-fidelity prototype was built using InVision, and tested with 5 participants. The tasks for the usability tests involved observing how participants would navigate the site to submit a request for a consultation appointment with a specific artist, including a form and file upload process.'} />
                <a href='https://invis.io/MPFJYJST642' target='_blank'><MainFont options={{size: 'xs', color: 'teal'}} text={'Click Here To See The Prototype.'} /></a>
                <MainFont options={{size: 'xs'}} text={'All five users were successful in completing the assigned task within the goal time. The prototype proved that the users were very interested in the artist’s bio and portfolio of work, as 100% of them scrolled through those before submitting the request. The general opinion of the UI design was positive, with a few adjustments needing to be made to the submission form itself.'} />
                <img src={'/assets/img/icons/UI-Design-Icon.png'}/>
                <MainFont options={{size: 'md', bold: true, color: 'grey'}} text={'User Interface Design'}/>
                <MainFont options={{size: 'xs'}} text={'The research and interaction design phases prepared us for the UI design phase. We began by creating a full style guide. The Marlowe logo was already existing and used by the shop in their print design and social media.'} />
              </div>
              <div className='width-75'>
                <img src='/assets/img/marlowe/Style Guide.png' />
              </div>
              <div className='width-50 site-image-descriptor'>
                <MainFont options={{size: 'xs'}} text={'We then designed the pages utilizing the research and testing results. Since many of the users had errors when navigating the consultation form, the hierarchy was adjusted and now includes visual separation. The resulting pages are below:'} />
              </div>
              <div>
                <div className='site-div'>
                  <img className="site-image-HP-large" src='/assets/img/marlowe/HP Large Screen copy.png'/>
                  <img className="site-image-HP-medium" src='/assets/img/marlowe/HP Medium Screen copy.png'/>
                  <img className="site-image-HP-small" src='/assets/img/marlowe/HP Small Screen copy.png'/>
                </div>
                <div className='site-div'>
                  <img className="site-image-artists-large" src='/assets/img/marlowe/Artists Large Screen copy.png'/>
                  <img className="site-image-artists-medium" src='/assets/img/marlowe/Artists Medium Screen copy.png'/>
                  <img className="site-image-artists-small" src='/assets/img/marlowe/Artists Small Screen copy.png'/>
                </div>
                <div className='site-div'>
                  <img className="site-image-artist-large" src='/assets/img/marlowe/Artist Large Screen copy.png'/>
                  <img className="site-image-artist-medium" src='/assets/img/marlowe/Artist Medium Screen copy.png'/>
                  <img className="site-image-artist-small" src='/assets/img/marlowe/Artist Small Screen copy.png'/>
                </div>
                <div className='mockup-div'>
                  <img src='/assets/img/marlowe/Marlowe-mockups.png'/>
                </div>
              </div>
              <div className='project-summary'>
                <div className='project-summary-container'>
                  <SecondaryFont options={{bold: true, size:'lg', color: 'white', italic: true}} text={'Conclusion'} />
                  <MainFont options={{size: 'xs', color: 'white'}} text={'While there is a need to update the design and flow of a tattoo client booking a consultation appointment, 100% of the people interviewed felt that talking face to face with the tattooer before booking the appointment to get the tattoo done is necessary.  This project proved to be challenging in that way, refreshing the UI and flow of the shop website while keeping the shop’s in-person process for booking consultation appointments intact.'} />
                </div>
              </div>
            </div>
        );
    }
}

export default Marlowe;
