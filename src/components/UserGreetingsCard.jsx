import React from 'react'
import { Grid, Card, Avatar, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

function UserGreetingsCard(props) {
    return (
        <div>
            <Card>
                <Grid container spacing={2} style={{ padding: "10px" }}>
                    <Grid item md={2} lg={1}>
                        <Avatar src={props.image || "https://robohash.org/5"} alt="Aman">A</Avatar>
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item md={7} lg={8}>
                        <Typography variant="subtitle2" align="left">Hello,</Typography>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

UserGreetingsCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
}

export default UserGreetingsCard

