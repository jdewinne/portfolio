import React from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import emoji from 'react-easy-emoji';

function svgEmoji(input) {
  return emoji(input, {
    baseUrl: 'https://twemoji.maxcdn.com/2/svg/',
    ext: '.svg',
    size: '',
  });
}

function About() {
  return (
    <Card sx={{ p: 1, width: '100%', minWidth: 0, boxSizing: 'border-box' }}>
      <Typography color="text.secondary" gutterBottom>
        About
      </Typography>
      <Typography>
        Big fan of Linux, Docker, Open Source and automation. Looking every day for new frameworks, tools, etc...
        Continuous Improvement is my life. Quality, Customer Intimacy, Knowledge Sharing, Openness and being Respectful to others is what I follow every day.
      </Typography>
      <Typography sx={{ mt: 1 }}>
        <b>One sentence</b>: Just inject the coffee into my jugular vein! {svgEmoji('☕', 'coffee')}
      </Typography>
    </Card>
  );
}

export default About;
