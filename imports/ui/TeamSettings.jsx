import React, { Component, PropTypes } from 'react';

export default class TeamParameters extends Component {
    render() {
        return (
            <div>
                <h2>Configure your team settings ({this.props.team.name})</h2>
                <form>
                    <div class="form-row">
                        <label for="teamName">Team name</label>
                        <input id="teamName" type="text" />
                    </div>

                    <div class="form-row">
                        <label for="notificationHour">When will Slack asks your team its daily mood?</label>
                        <input id="notificationHour" type="text" />
                    </div>

                    <button type="submit">Update Settings</button>
                </form>
            </div>
        );
    }
}

TeamParameters.propTypes = {
    team: PropTypes.object.isRequired
};
