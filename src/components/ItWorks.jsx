import React from 'react';
import {
  Box,
  Container,
  Heading,
  Grid,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';
import joinGroup from '../assets/joinagroup.svg';
import ticket from '../assets/ticket.svg';
import startGroup from '../assets/start-group.svg';

const ItWorks = () => {
  return (
    <Box>
      <Container maxW="container.xl" my="20">
        <Heading align="center" as="h3" size="lg" pb="2">
          How Meetup works
        </Heading>
        <Box align="center" maxW="700px" mx="auto" pb="10">
          Meet new people who share your interests through online and in-person
          events. It’s free to create an account.
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap="6">
          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={joinGroup} alt="brand" />
            <Heading as="h5" size="md">
              <Link>
                <Link color="blue.100" pb="4">
                  Join a Group
                </Link>
              </Link>
            </Heading>
            <p>
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </p>
          </Box>
          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={ticket} alt="brand" />
            <Heading as="h5" size="md">
              <Link>
                <Link color="blue.100" pb="4">
                  Find a event
                </Link>
              </Link>
            </Heading>
            <p>
              Events are happening on just about any topic you can think of,
              from online gaming and photography to yoga and hiking.
            </p>
          </Box>
          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={startGroup} alt="brand" />
            <Heading as="h5" size="md">
              <Link>
                <Link color="blue.100" pb="4">
                  Start a group
                </Link>
              </Link>
            </Heading>
            <p>
              You don’t have to be an expert to gather people together and
              explore shared interests.
            </p>
          </Box>
        </Grid>

        <Box align="center" mt="16">
          <Button
            _hover={{ opacity: '0.8' }}
            bg="blue.100"
            color="#ffffff"
            fontWeight="normal"
            size="md"
          >
            Join Meetup
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ItWorks;
