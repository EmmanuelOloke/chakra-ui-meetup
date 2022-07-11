import React from 'react';

import {
  Box,
  Button,
  Container,
  Heading,
  Divider,
  List,
  ListItem,
  Link,
  Image,
} from '@chakra-ui/react';

import iosAppstore from '../assets/ios-download.svg';
import androidAppstore from '../assets/android-download.svg';

const FooterBottom = () => {
  return (
    <Box mt={5} color="#ffffff" background="#212121" py="10">
      <Container maxWidth="container.xl">
        <Box display="flex" alignItems="center">
          <Heading size="md">Create your own Meetup group.</Heading>
          <Button ml="4" colorScheme="white" variant="outline">
            Get Started
          </Button>
        </Box>

        <Divider my="10" />

        <Box display="flex" alignItems="top">
          <Box flex="1">
            <Heading size="sm">Your Account</Heading>
            <List mt="4" spacing={2}>
              <ListItem>
                <Link color="#A2A2A2">Sign up</Link>
              </ListItem>

              <ListItem>
                <Link color="#A2A2A2">Log in</Link>
              </ListItem>

              <ListItem>
                <Link color="#A2A2A2">Help</Link>
              </ListItem>
            </List>
          </Box>

          <Box flex="1">
            <Heading size="sm">Discover</Heading>
            <List mt="4" spacing={2}>
              <ListItem>
                <Link color="#A2A2A2">Groups</Link>
              </ListItem>

              <ListItem>
                <Link color="#A2A2A2">Calendar</Link>
              </ListItem>

              <ListItem>
                <Link color="#A2A2A2">Topics</Link>
              </ListItem>

              <ListItem>
                <Link color="#A2A2A2">Cities</Link>
              </ListItem>

              <ListItem>
                <Link color="#A2A2A2">Online Events</Link>
              </ListItem>

              <ListItem>
                <Link color="#A2A2A2">Local Guides</Link>
              </ListItem>
            </List>
          </Box>

          <Box flex="1">
            <Heading size="sm">Meetup</Heading>
            <List mt="4" spacing={2}>
              <ListItem>
                <Link color="#A2A2A2">About</Link>
              </ListItem>

              <ListItem>
                <Link color="#A2A2A2">Blog</Link>
              </ListItem>

              <ListItem>
                <Link color="#A2A2A2">Meetup Pro</Link>
              </ListItem>

              <ListItem>
                <Link color="#A2A2A2">Careers</Link>
              </ListItem>

              <ListItem>
                <Link color="#A2A2A2">Apps</Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterBottom;
