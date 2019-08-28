import React from 'react';
import { Grid, Cell, CardText, CardActions, Button, Card, CardTitle } from 'react-mdl';
import {Link} from 'react-router-dom';
export default (props) => {
    const { userTotals, title, route } = props
    return (
        <div>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <Card shadow={5} style={{ width: '220px', height: '220px', margin: 'auto' }}>
                        <CardTitle expand style={{ fontSize: '20px' }} >{userTotals ? userTotals : ''}</CardTitle>
                        <CardText>
                            {title}
                        </CardText>
                        <CardActions border>
                            <Link to={route}><Button colored>More info</Button></Link>
                        </CardActions>
                    </Card>
                </Cell>
            </Grid>
        </div>
    )
}