import React from 'react';

import { Bash, LanguageHtml5, LanguageJava, LanguageJavascript, LanguagePython, LanguageTypescript, Percent, StackOverflow, React as ReactIcon } from 'mdi-material-ui';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1),
    },
    link: {
        color: "inherit",
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function createData(language, percentage) {
    return { language, percentage };
}

const rows = [
    createData(<LanguagePython />, 65.14),
    createData('Scala', 15.28),
    createData(<LanguageTypescript />, 10.97),
    createData(<LanguageJavascript />, 2.03),
    createData(<LanguageJava />, 1.41),
    createData('Go', 1.27),
    createData(<LanguageHtml5 />, 0.84),
    createData('Handlebars', 0.71),
    createData('Groovy', 0.63),
    createData(<Bash />, 0.61)
];

function createHackerRankData(language, badge) {
    return { language, badge };
}

const hackerrank = [
    createHackerRankData('Problem Solving', 'Silver Level - 3 star'),
    createHackerRankData(<LanguageJava />, 'Gold level - 5 star'),
    createHackerRankData(<LanguagePython />, 'Gold level - 5 star'),
    createHackerRankData('SQL', 'Silver level - 3 star'),
    createHackerRankData(<ReactIcon />, 'Rank 1'),
    createHackerRankData(<Bash />, 'Rank 6015')
];

function Coding() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Coding
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper elevation={3}>
                                <Table className={classes.table} size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell colSpan={2}><Link href="https://www.hackerrank.com/joris_dewinne" className={classes.link} underline='always'>HackerRank (Jul '20)</Link></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {hackerrank.map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    {row.language}
                                                </TableCell>
                                                <TableCell>{row.badge}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3}>
                                <List>
                                    <ListItemLink href="https://stackoverflow.com/users/6327848/joris-de-winne">
                                        <ListItemIcon><StackOverflow /></ListItemIcon>
                                        <ListItemText>Supporter, Revival, Informed and Teacher badges</ListItemText>
                                    </ListItemLink>
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                    <Typography>
                        The list below is generated based on the source code repositories I'm working on and using <Link href="https://github.com/go-enry/go-enry" className={classes.link} underline='always'>go-enry</Link> to scan all of them:
                    </Typography>
                    <TableContainer>
                        <Table className={classes.table} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Language</TableCell>
                                    <TableCell align="right"><Percent fontSize="small" /></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                    <TableRow key={page * rowsPerPage + index}>
                                        <TableCell component="th" scope="row">
                                            {row.language}
                                        </TableCell>
                                        <TableCell align="right">{row.percentage}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination rowsPerPageOptions={[5]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage} />
                    </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Card>
    );
}

export default Coding;