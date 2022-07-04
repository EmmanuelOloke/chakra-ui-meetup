import { Box, Image, Button, Container, Heading } from '@chakra-ui/react';

import brandLogo from '../assets/brand-logo.svg';
import illustration from '../assets/illustration.svg';

const Banner = () => {
  return (
    <>
      <header>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          ml={6}
          mr={6}
        >
          <Image boxSize="90px" src={brandLogo} alt="Brand" />
          <Box>
            <Button pr={3} colorScheme="grey.600" fontSize="sm" variant="link">
              Log In
            </Button>
            <Button colorScheme="grey.600" fontSize="sm" variant="link">
              Sign Up
            </Button>
          </Box>
        </Box>
      </header>

      <Box>
        <Container maxWidth="container.xl">
          <Box display="flex" alignItems="center" py="20" flexDirection="row">
            <Box mr="6">
              <Heading as="h1" size="2xl">
                <Box fontweight="black">
                  Dive in! There are so many things to do in Meetup
                </Box>
              </Heading>
              <Box mt="6" fontWeight="medium">
                Whatever you’re looking to do this year, Meetup can help. For 20
                years, people have turned to Meetup to meet people, make
                friends, find support, grow a business, and explore their
                interests. Thousands of events are happening every day—join the
                fun.
              </Box>
            </Box>
            <Box w="100%">
              <Image w="100%" src={illustration} alt="illustration" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="container.xl" mt={10}></Container>
    </>
  );
};

export default Banner;
