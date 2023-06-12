import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Markdown from '../../components/items/Markdown';
import Typography from '../../components/items/Typography';
import withRoot from '../../styles/withRoot';
import terms from './terms.md';
import ReactMarkdown from 'react-markdown';

function MarkdownFile() {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch(terms)
      .then(response => response.text())
      .then(content => setMarkdownContent(content))
      .catch(error => console.error(error));
  }, []);

  return (
      <React.Fragment>
            <Container>
              <Box sx={{ mt: 7, mb: 12 }}>
                <Typography variant="h3" gutterBottom marked="center" align="center">
                  Terms
                </Typography>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
              </Box>
            </Container>
          </React.Fragment>
        );
  }

export default MarkdownFile;



