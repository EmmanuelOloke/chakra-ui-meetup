import React from 'react';
import { Box, Container, Heading, Link } from '@chakra-ui/react';

const Upcoming = () => {
  return (
    <Box mt="20">
      <Container maxWidth="container.xl">
        <Box
          mb="7"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Heading alignItems="center" as="h3" size="lg">
              Upcoming online events
            </Heading>
          </Box>

          <Box>
            <Link fontWeight="semibold" color="teal.500">
              Explore more events
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Upcoming;
