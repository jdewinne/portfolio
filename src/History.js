import React from 'react';

import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WorkIcon from '@mui/icons-material/Work';

function History() {
  return (
    <Card sx={{ p: 1, width: '100%', minWidth: 0, boxSizing: 'border-box' }}>
      <Typography color="text.secondary" gutterBottom>
        Work, Education and certifications
      </Typography>
      <List sx={{ minWidth: 0, width: '100%' }}>
        <ListItem>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText>
            <Link href="https://www.replicated.com/" color="inherit" underline="always">Replicated</Link>: Senior Software Engineer | May 2023 - Current
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText>
            <Link href="https://www.replicated.com/" color="inherit" underline="always">Replicated</Link>: Solutions Engineer | Mar 2021 - May 2023
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText>
            <Link href="https://www.stackstate.com/" color="inherit" underline="always">StackState</Link>: Solutions Engineer | Dec 2019 - Mar 2021
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText>
            <Link href="http://snyk.io" color="inherit" underline="always">Snyk</Link>: Solutions Engineer | May 2019 - Dec 2019
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText>
            <Link href="http://www.xebialabs.com" color="inherit" underline="always">XebiaLabs</Link>: Sales Engineer | 2013 - 2019
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText>
            <Link href="https://www.scrum.org/" color="inherit" underline="always">Scrum.org</Link>: Professional Scrum Trainer | 2013 - 2018
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText>
            <Link href="http://www.xebia.com" color="inherit" underline="always">Xebia</Link>: Senior Consultant | 2012 - 2013
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText>
            <Link href="https://www.capgemini.com/" color="inherit" underline="always">Capgemini</Link>: Manager | 2009 - 2012
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText>
            <Link href="http://www.realdolmen.com/en" color="inherit" underline="always">RealDolmen</Link>: Technical Project Leader / Technical Analyst / Software Engineer | 2007 - 2009
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText>
            <Link href="https://www.barco.com/en/" color="inherit" underline="always">Barco</Link>: Technical Analyst / Project Lead / Software R&D Engineer | 2003 - 2006
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
            Python 3 Programming Specialization: <Link href="https://coursera.org/share/d214637c6cc512a30591ed3c26ff765f" color="inherit" underline="always">Coursera - University of Michigan</Link> | December 2020
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
          <ListItemText>
            Python Project: pillow, tesseract, and opencv: <Link href="https://coursera.org/share/35b7174800107c051b568e6c9653d184" color="inherit" underline="always">Coursera - University of Michigan</Link> | December 2020
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
          <ListItemText>
            Python Classes and Inheritance: <Link href="https://coursera.org/share/b48c77ce127df1ddc26498d4ddd66300" color="inherit" underline="always">Coursera - University of Michigan</Link> | November 2020
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
          <ListItemText>
            Data Collection and Processing with Python: <Link href="https://coursera.org/share/2aac1212fb5865087d756dc4e6762c95" color="inherit" underline="always">Coursera - University of Michigan</Link> | November 2020
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
          <ListItemText>
            Python Functions, Files, and Dictionaries: <Link href="https://coursera.org/share/77c65b18b61692a1ae6734703966667c" color="inherit" underline="always">Coursera - University of Michigan</Link> | October 2020
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
          <ListItemText>
            Python Basics: <Link href="https://coursera.org/share/9a49f54a6d84f6f5d7a2ef4aa92cacf8" color="inherit" underline="always">Coursera - University of Michigan</Link> | October 2020
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
          <ListItemText>
            Professional Scrum Developer: <Link href="https://www.scrum.org/" color="inherit" underline="always">Scrum.org</Link> | 2013
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
          <ListItemText>
            Professional Scrum Master: <Link href="https://www.scrum.org/" color="inherit" underline="always">Scrum.org</Link> | 2011
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
          <ListItemText>
            Certified Scrum Master: <Link href="https://www.scrumalliance.org/" color="inherit" underline="always">Scrum Alliance</Link> | 2010
          </ListItemText>
        </ListItem>
      </List>
    </Card>
  );
}

export default History;
