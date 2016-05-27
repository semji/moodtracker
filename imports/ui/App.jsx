import React, { Component } from 'react';
import TeamSettings from './TeamSettings';

// App component - represents the whole app
export default class App extends Component {

    render() {
        return (
            <div className="container">
                <header>
                    <h1>MoodTracker</h1>

                    <TeamSettings />
                </header>
            </div>
        );
    }
}
