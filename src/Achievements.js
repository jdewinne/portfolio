import React from 'react';

import { Docker, LanguagePython, Linux, React as ReactIcon } from 'mdi-material-ui';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1),
    },
    link: {
        color: "inherit",
    },
}));

function Achievements() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Latest Achievements
            </Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <LanguagePython />
                    </ListItemIcon>
                    <ListItemText>
                        Working on a nginx topology visualization using <Link href="https://github.com/nginxinc/crossplane" className={classes.link} underline='always'>crossplane</Link> and visualizing it in StackState, using an <Link href="https://github.com/jdewinne/stackstate-nginx-check" className={classes.link} underline='always'>agent check</Link>.
                  </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ReactIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Learning react by creating an electron app that is aiming at visualizing k8s resources (early stages). See <Link href="https://github.com/jdewinne/kuis" className={classes.link} underline='always'>kuis</Link>.
                  </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Docker />
                    </ListItemIcon>
                    <ListItemText>
                        Fixed containerd cri authentication documentation. See <Link href="https://github.com/containerd/cri/pull/1375" className={classes.link} underline='always'>PR 1375</Link>.
                  </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Linux />
                    </ListItemIcon>
                    <ListItemText>
                        Fixed the locale settings in `alis`, an automated installer for archlinux. See <Link href="https://github.com/picodotdev/alis/pull/61" className={classes.link} underline='always'>PR 61</Link>.
                  </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <LanguagePython />
                    </ListItemIcon>
                    <ListItemText>
                        Helped on releasing <Link href="https://github.com/snyk-labs/pysnyk" className={classes.link} underline='always'>pysnyk</Link>, a Python client for the Snyk security platform.
                  </ListItemText>
                </ListItem>
            </List>
        </Card>
    );
}

export default Achievements;