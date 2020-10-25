import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Brian Le</h2>
                        <img src="https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/122691999_3011007422334528_3775619137234830155_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=Ad7mkIIzYScAX_tKdj_&_nc_ht=scontent.fyto1-1.fna&oh=7180af09b99161cde535b269a71f4d0f&oe=5FBB1337"
                            alt="avatar"
                            style={{ height: '250px' }} />
                        <p style={{ width: '70%', margin: 'auto', paddingTop: '1em' }}>Random stuff that i should put about myself</p>

                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (289) 925-4481
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-fax" aria-hidden="true" />
                                        (289) 925-4481
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        briantule3@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-link" aria-hidden="true" />
                                        (289) 925-4481
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;