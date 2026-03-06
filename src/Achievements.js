import React from 'react';

import { CodeJson, Docker, Github, LanguagePython, Linux, Kubernetes, Nodejs, React as ReactIcon } from 'mdi-material-ui';

import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import emoji from 'react-easy-emoji';

function svgEmoji(input) {
  return emoji(input, {
    baseUrl: 'https://twemoji.maxcdn.com/2/svg/',
    ext: '.svg',
    size: '',
  });
}

function createAchievement(icon, text, emoji) {
  return { icon, text, emoji };
}

let key = 0;
const achievementRows = [
  createAchievement(
    <Kubernetes />,
    [
      'Added multinode support to ',
      <Link href="https://docs.replicated.com/vendor/embedded-kubernetes-overview#embedded-kubernetes-with-replicated" color="inherit" underline="always" key={key++}>Embedded Cluster</Link>,
      ' for ',
      <Link href="https://www.replicated.com/compatibility-matrix" color="inherit" underline="always" key={key++}>Compatibility Matrix</Link>,
      '.',
    ],
    svgEmoji('☁️', 'k8s')
  ),
  createAchievement(
    <Nodejs />,
    [
      'Open Sourced the ',
      <Link href="https://github.com/jdewinne/slack-channel-created" color="inherit" underline="always" key={key++}>Slack Channel Created</Link>,
      ' bot. It sends a message to a channel, each time someone creates a new Channel. Currently running on ',
      <Link href="https://glitch.com/~slack-channel-created" color="inherit" underline="always" key={key++}>Glitch</Link>,
      '.',
    ],
    svgEmoji('😺', 'fomo')
  ),
  createAchievement(
    <Linux />,
    [
      'Provided the solution to install  ',
      <Link href="https://github.com/cdr/code-server" color="inherit" underline="always" key={key++}>code-server</Link>,
      ' on archlinux using ',
      <Link href="https://aur.archlinux.org/packages/code-server" color="inherit" underline="always" key={key++}>aur</Link>,
      ' by fixing the "Link has been severed" problem',
    ],
    svgEmoji('🐧', 'penguin')
  ),
  createAchievement(
    <ReactIcon />,
    [
      'Refactored my portfolio achievements into a paginated list using ',
      <Link href="https://material-ui.com/components/tables/#custom-pagination-options" color="inherit" underline="always" key={key++}>Material-UI</Link>,
      ' allowing to store as many as needed.',
    ],
    svgEmoji('🏆', 'Trophy')
  ),
  createAchievement(
    <CodeJson />,
    ['Refactored the StackState Demo Environment by automating the setup using Groovy, JSON, Handlebars, Docker, k8s, etc... (Private repo)'],
    svgEmoji('✨', 'sparkles')
  ),
  createAchievement(
    <Github />,
    [
      'Fixed the base64 encoding for the gcloud token in the ',
      <Link href="https://github.com/actions-hub/gcloud/pull/16" color="inherit" underline="always" key={key++}>gcloud GitHub Action</Link>,
      '.',
    ],
    svgEmoji('🎬', 'Clapper Board')
  ),
  createAchievement(
    <LanguagePython />,
    [
      'Working on a nginx topology visualization using ',
      <Link href="https://github.com/nginxinc/crossplane" color="inherit" underline="always" key={key++}>crossplane</Link>,
      ' and visualizing it in StackState, using an ',
      <Link href="https://github.com/jdewinne/stackstate-nginx-check" color="inherit" underline="always" key={key++}>agent check</Link>,
      '.',
    ],
    svgEmoji('✈️', 'airplane')
  ),
  createAchievement(
    <ReactIcon />,
    [
      'Learning react by creating an electron app that is aiming at visualizing k8s resources (early stages). See ',
      <Link href="https://github.com/jdewinne/kuis" color="inherit" underline="always" key={key++}>kuis</Link>,
      '.',
    ],
    svgEmoji('🧽', 'sponge')
  ),
  createAchievement(
    <Docker />,
    [
      'Fixed containerd cri authentication documentation. See ',
      <Link href="https://github.com/containerd/cri/pull/1375" color="inherit" underline="always" key={key++}>PR 1375</Link>,
      '.',
    ],
    svgEmoji('📖', 'book')
  ),
  createAchievement(
    <Linux />,
    [
      'Fixed the locale settings in `alis`, an automated installer for archlinux. See ',
      <Link href="https://github.com/picodotdev/alis/pull/61" color="inherit" underline="always" key={key++}>PR 61</Link>,
      '.',
    ],
    svgEmoji('🐧', 'penguin')
  ),
  createAchievement(
    <LanguagePython />,
    [
      'Helped on releasing ',
      <Link href="https://github.com/snyk-labs/pysnyk" color="inherit" underline="always">pysnyk</Link>,
      ' a Python client for the Snyk security platform.',
    ],
    svgEmoji('🔒', 'locked')
  ),
];

function Achievements() {
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
        Latest Achievements
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableBody>
            {achievementRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={page * rowsPerPage + index}>
                  <TableCell>{row.icon}</TableCell>
                  <TableCell align="left">
                    {row.text} {row.emoji}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={achievementRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Card>
  );
}

export default Achievements;
