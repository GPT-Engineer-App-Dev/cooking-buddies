import React from 'react';
import { Box, Container, Heading, Text, VStack, Image, Input, Button, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaHeart, FaComments } from "react-icons/fa";

const RecipeCard = ({ title, image, likes, comments }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bg} p={4} borderRadius="lg" boxShadow="md" color={color}>
      <Image src={image} alt={title} borderRadius="md" mb={3} />
      <Heading size="md" mb={2}>{title}</Heading>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text fontSize="sm"><FaHeart /> {likes}</Text>
        <Text fontSize="sm"><FaComments /> {comments}</Text>
      </Box>
    </Box>
  );
};

const Index = () => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bg} minH="100vh" py={8}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Heading textAlign="center" size="2xl" mb={2}>Recipe Share</Heading>
          <Text textAlign="center" fontSize="xl" mb={8}>Discover, share, and enjoy delicious recipes from around the world!</Text>
          
          <Box position="relative" mb={8}>
            <Input placeholder="Search for recipes..." size="lg" pr="4.5rem" />
            <Button position="absolute" right={2} top="50%" transform="translateY(-50%)" colorScheme="teal">
              <FaSearch />
            </Button>
          </Box>

          <Heading size="xl" mb={4}>Popular Recipes</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <RecipeCard title="Spaghetti Carbonara" image="https://source.unsplash.com/random/400x300?pasta" likes={120} comments={15} />
            <RecipeCard title="Chicken Tikka Masala" image="https://source.unsplash.com/random/400x300?curry" likes={95} comments={8} />
            <RecipeCard title="Avocado Toast" image="https://source.unsplash.com/random/400x300?avocado" likes={78} comments={12} />
          </SimpleGrid>

          <Box textAlign="center" mt={8}>
            <Button colorScheme="teal" size="lg">Share Your Recipe</Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;