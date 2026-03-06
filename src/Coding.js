import React from 'react';

import { Bash, LanguageHtml5, LanguageJava, LanguageJavascript, LanguagePython, LanguageTypescript, Percent, StackOverflow } from 'mdi-material-ui';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

function ListItemLink(props) {
  return <ListItem component="a" {...props} />;
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
  createData(<Bash />, 0.61),
];

function createHackerRankData(language, badge) {
  return { language, badge };
}

const hackerrank = [
  createHackerRankData('Problem Solving', 'Gold Level - 5 star'),
  createHackerRankData(<LanguageJava />, 'Gold level - 5 star'),
  createHackerRankData(<LanguagePython />, 'Gold level - 5 star'),
  createHackerRankData('SQL', 'Gold level - 5 star'),
  createHackerRankData(<Bash />, 'Rank 6768'),
];

function Coding() {
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
    <Card sx={{ p: 1 }}>
      <Typography color="text.secondary" gutterBottom>
        Coding
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Link href="https://www.hackerrank.com/joris_dewinne" color="inherit" underline="always">
                          HackerRank (Nov '20)
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {hackerrank.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.language}</TableCell>
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
                  <ListItemLink href="https://stackoverflow.com/users/6327848/joris-de-winne" sx={{ color: 'inherit' }}>
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
            <Box sx={{ p: 1 }}>
              <Typography>
                The list below is generated based on the source code repositories I'm working on and using{' '}
                <Link href="https://github.com/go-enry/go-enry" color="inherit" underline="always">
                  go-enry
                </Link>{' '}
                to scan all of them:
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Language</TableCell>
                      <TableCell align="right">
                        <Percent fontSize="small" />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => (
                        <TableRow key={page * rowsPerPage + index}>
                          <TableCell component="th" scope="row">
                            {row.language}
                          </TableCell>
                          <TableCell align="right">{row.percentage}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Coding;
