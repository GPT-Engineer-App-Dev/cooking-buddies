import React, { useState } from 'react';
import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const SubmitRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ title, ingredients, instructions, image });
    toast({
      title: "Recipe submitted.",
      description: "We've received your recipe submission.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Reset form
    setTitle('');
    setIngredients('');
    setInstructions('');
    setImage(null);
  };

  return (
    <Box py={8}>
      <Container maxW="container.md">
        <VStack spacing={8} align="stretch">
          <Heading textAlign="center">Submit Your Recipe</Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Recipe Title</FormLabel>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter recipe title" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Ingredients</FormLabel>
                <Textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Enter ingredients (one per line)" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Instructions</FormLabel>
                <Textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Enter cooking instructions" />
              </FormControl>
              <FormControl>
                <FormLabel>Image</FormLabel>
                <Input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
              </FormControl>
              <Button type="submit" colorScheme="teal" size="lg" width="full">
                Submit Recipe
              </Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default SubmitRecipe;