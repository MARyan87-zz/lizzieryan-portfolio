import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Work from './Work/Work';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshWholeApp: props.refreshWholeApp,
      jobs: [{
        title: 'Executive Director',
        location: 'Berryville Main Street | Berryville, Virginia',
        duration: '2017- Present',
        duties: ['Performs staff and volunteer supervision, strategic planning, financial management, volunteer relations and acting as liason to the Board of Supervisors and Town of Berryville', 'Creates and maintains partnerships with outside organizations', 'Responsible for management and marketing of Firehouse Gallery, including creating visually striking shop displays, managing inventory and financial aspects', 'Oversaw the redesign of site brandingand websites']
      },{
        title: 'Museum Director',
        location: 'Fauquier Historical Society | Warrenton, Virginia',
        duration: '2016- 2017',
        duties: ['Performs duties of Executive Director, including staff and volunteer supervision, strategic planning, financial management, volunteer relations and acting as liason to the Board of Supervisors and Museum Committee', 'Successful acquisition of $10,000/month in Google AdGrants advertising for organization', 'Creates and maintains partnerships with outside organizations', 'Responsible for the management and implementation of all new museum exhibits', 'Manages all aspects of retail gift shop to include manufacturing and purchasing stock, creating visually striking shop displays, managing inventory and financial aspects', 'Design and installation of museum exhibits, working closely with historians and curators to bring new visitors to a significant county historic site', 'Oversaw the redesign of site branding and websites']
      }, {
        title: 'Creative Director',
        location: 'Long Branch Plantation | Millwood, Virginia',
        duration: '2014 - 2016',
        duties: ['Performs duties of Executive Director, including staff and volunteer supervision, strategic planning, financial management, volunteer relations and acting as liaison to the Board of Supervisors and Executive Committee', 'Successful acquisition of $10,000/month in Google AdGrants advertising for organization, creates and maintains partnerships with outside organizations', 'Responsible for the management and implementation of all programs and events', 'Design and installation of museum exhibits, working closely with historians and curators to bring new life to a nationally significant historic site', 'Oversaw the redesign of site banding, logos and websites', 'Communications coordinator of all social media and networking']
      },{
        title: 'Operations Associate',
        location: 'Long Branch Plantation | Millwood, Virginia',
        duration: '2010 - 2014',
        duties: ['Responsible for organizing client data and other administrative materials', 'Responsible for assisting staff in various departments and working independently in order to achieve desired results', 'Implementation of all invoicing and bookkeeping of incomes for organization']
      }, {
        title: 'Teaching Assistant',
        location: 'Loundoun County Public Schools',
        duration: '2007-2008',
        duties: ['Responsible for organizing student assignments and other teaching aides', 'Responsible for assisting lead teacher in various subjects and working independently with students in order to achieve desired results', 'Implementation of all lesson plans and mainstream class assignments for assigned students']
      }, {
        title: 'Independent Artist & Designer',
        location: 'Various locations',
        duration: '2001 - Present',
        duties: ['Producing design for various clients from restaurants to historic sites', 'Always producing final products within a specified timeframe', 'Developing works in different styles according to the needs of the clients']
      }],
      education: [{
        name: 'DesignLab',
        location: 'UXAcademy',
        duration: '2017 - Present',
        degree: 'Certification in User Experience Design'
      },{
        name: 'Virginia Polytechnic Institute and State University',
        location: 'Blacksburg, Virginia',
        duration: '2000 - 2005',
        degree: 'Bachelors of Art in Studio Art, Minor in Industrial Design'
      }, {
        name: 'Shenendoah University',
        location: 'Leesburg, Virginia',
        duration: '2007 - 2008',
        degree: '15 Graduate level credits toward Art Education licensure as required by Virginia'
      }],
      skills: [
        'Community Networking',
        'Marketing and Branding',
        'Social Media Publishing and Advertising',
        'Adobe Creative Suite',
        'Sketch',
        'InVision',
        'Marvel',
        'Professional Digital Photography',
        'Google AdGrants',
        'WordPress',
        'Strikingly',
        'Microsoft Office Suite'
      ],
      affiliations: [
        'Member, Virginia Association of Museums',
        'Member, Preservation Maryland',
        'Volunteer, Piedmont Environmental Council',
        'Member, Virginia Native Plant Society'
      ]
    };

    this.refreshWholeApp = this.refreshWholeApp.bind(this);
  }

  refreshWholeApp() {
    this.state.refreshWholeApp();
  }

  render() {
    return (
      <div className="backdrop">
        <div className="container">
          <Header />
          <div className="content">
            <Switch>
              <Route
                path="/"
                exact
                component={Work}
              />
              <Route
                path="/Resume"
                exact
                render={props => <Resume {...props}
                  jobs={this.state.jobs}
                  education={this.state.education}
                  skills={this.state.skills}
                  affiliations={this.state.affiliations}
                />}
              />
              <Route
                path="/Contact"
                exact
                component={Contact}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;



