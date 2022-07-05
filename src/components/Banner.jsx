import {
  Box,
  Image,
  Button,
  Container,
  Heading,
  Grid,
  Badge,
} from '@chakra-ui/react';

import brandLogo from '../assets/brand-logo.svg';
import illustration from '../assets/illustration.svg';
import imageOne from '../assets/image-one.jpeg';
import imageTwo from '../assets/image-two.jpeg';
import imageThree from '../assets/image-three.jpeg';

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

      <Container maxWidth="container.xl" mt={10}>
        <Grid templateColumns="repeat(3, 1fr)">
          <Box>
            <Image w="100%" borderRadius="lg" src={imageOne} alt="image one" />
            <Button colorScheme="teal" variant="link" mt="5">
              Explore the outdoors
              <Image
                w="100%"
                ml="2"
                src="https://secure.meetupstatic.com/next/images/shared/right-arrow.svg"
                alt="right arrow"
              />
            </Button>
          </Box>
          <Box>
            <Image w="100%" borderRadius="lg" src={imageTwo} alt="image two" />
            <Button colorScheme="teal" variant="link" mt="5">
              It will help your life
              <Image
                w="100%"
                ml="2"
                src="https://secure.meetupstatic.com/next/images/shared/right-arrow.svg"
                alt="right arrow"
              />
            </Button>
          </Box>
          <Box>
            <Image
              w="100%"
              borderRadius="lg"
              src={imageThree}
              alt="image three"
            />
            <Button colorScheme="teal" variant="link" mt="5">
              I say network
              <Image
                w="100%"
                ml="2"
                src="https://secure.meetupstatic.com/next/images/shared/right-arrow.svg"
                alt="right arrow"
              />
            </Button>
          </Box>
        </Grid>
      </Container>

      {/* PILLS */}
      <Container maxW="container.xl" mt={10}>
        <Box
          direction="row"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Boost your career
          </Badge>

          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Find your zen
          </Badge>

          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Get moving
          </Badge>

          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Share language + culture
          </Badge>

          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Read with friends
          </Badge>

          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Write together
          </Badge>

          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="normal"
            color="#ffffff"
            bg="blue.100"
          >
            Hone your craft
          </Badge>
        </Box>
      </Container>
    </>
  );
};

export default Banner;
