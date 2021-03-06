import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import emoji from 'react-easy-emoji'

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1),
    },
}));

function svgEmoji (input) {
	return emoji(input, {
		baseUrl: 'https://twemoji.maxcdn.com/2/svg/',
		ext: '.svg',
        size: '',
	})
}

function About() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                About
            </Typography>
            <Typography >
                Big fan of Linux, Docker, Open Source and automation. Looking every day for new frameworks, tools, etc...
                Continuous Improvement is my life.
                Quality, Customer Intimacy, Knowledge Sharing, Openness and being Respectful to others is what I follow every day.
            </Typography>
            <Typography className={classes.pos}>
                <b>One sentence</b>: Just inject the coffee into my jugular vein! { svgEmoji('☕', "coffee", ) }
            </Typography>
        </Card>
    );
}

export default About;