import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';

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
      </Container>
    </Box>
  );
};

export default ItWorks;
