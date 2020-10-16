import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import WorkIcon from '@material-ui/icons/Work';


const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1),
    },
    link: {
        color: "inherit",
    },
}));

function History() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Work, Education and certifications
            </Typography>
            <List>
                <ListItem>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText>
                        <Link href="https://www.stackstate.com/" className={classes.link} underline='always'>StackState</Link>: Solutions Engineer | Dec 2019 - Current
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText>
                        <Link href="http://snyk.io" className={classes.link} underline='always'>Snyk</Link>: Solutions Engineer | May 2019 - Dec 2019
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText>
                        <Link href="http://www.xebialabs.com" className={classes.link} underline='always'>XebiaLabs</Link>: Sales Engineer | 2013 - 2019
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText>
                        <Link href="https://www.scrum.org/" className={classes.link} underline='always'>Scrum.org</Link>: Professional Scrum Trainer | 2013 - 2018
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText>
                        <Link href="http://www.xebia.com" className={classes.link} underline='always'>Xebia</Link>: Senior Consultant | 2012 - 2013
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText>
                        <Link href="https://www.capgemini.com/" className={classes.link} underline='always'>Capgemini</Link>: Manager | 2009 - 2012
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText>
                        <Link href="http://www.realdolmen.com/en" className={classes.link} underline='always'>RealDolmen</Link>: Technical Project Leader / Technical Analyst / Software Engineer | 2007 - 2009
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText>
                        <Link href="https://www.barco.com/en/" className={classes.link} underline='always'>Barco</Link>: Technical Analyst / Project Lead / Software R&D Engineer | 2003 - 2006
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
                    <ListItemText>
                        Master in Computer Sciences: University of Ghent (Belgium) | 1999 - 2003
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
                    <ListItemText>
                        Python Basics: <Link href="https://coursera.org/share/9a49f54a6d84f6f5d7a2ef4aa92cacf8" className={classes.link} underline='always'>Coursera - University of Michigan</Link> | October 2020
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
                    <ListItemText>
                        Professional Scrum Developer: <Link href="https://www.scrum.org/" className={classes.link} underline='always'>Scrum.org</Link> | 2013
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
                    <ListItemText>
                        Professional Scrum Master: <Link href="https://www.scrum.org/" className={classes.link} underline='always'>Scrum.org</Link> | 2011
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
                    <ListItemText>
                        Certified Scrum Master: <Link href="https://www.scrumalliance.org/" className={classes.link} underline='always'>Scrum Alliance</Link> | 2010
                    </ListItemText>
                </ListItem>
            </List>
        </Card>
    );

}

export default History;