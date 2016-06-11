import React, { Component, PropTypes } from 'react';
import TeamSettings from './TeamSettings';
import { createContainer } from 'meteor/react-meteor-data';

import { Teams } from '../api/teams.js';

// App component - represents the whole app
class App extends Component {

    render() {
        return (
            <div className="container">
                <header>
                    <h1>MoodTracker</h1>

                    <TeamSettings team={this.props.team} />
                </header>
            </div>
        );
    }
}

App.propTypes = {
    team: PropTypes.object.isRequired
};

export default createContainer(() => {
    if (!Teams.findOne({})) {
        Teams.insert({
            name: 'My Team'
        });
    }

    return {
        team: Teams.findOne({})
    };
}, App);
