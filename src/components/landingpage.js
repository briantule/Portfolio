import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div stype={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://www.vippng.com/png/full/235-2356293_thanos-infinity-gauntlet-black-and-white.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Software Engineering</h1>

                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | REact | React Native | NodeJS</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/briantule/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/briantule" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Facebook */}
                                <a href="https://www.facebook.com/briantule" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                {/* Twitter */}
                                <a href="https://twitter.com/briantule_" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>
                            </div>

                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;