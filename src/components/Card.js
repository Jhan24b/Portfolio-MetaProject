import { Center, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      color='black'
      background='white'
      cursor='pointer'
      borderRadius='xl'
      boxSizing="border-box"
    >
      <Image src={imageSrc} borderRadius="xl"/>
      <VStack spacing={4} padding={4} align={"flex-start"}>
          <Heading as="h3" size="md">{title}</Heading>
          <Text fontSize="lg" color={"gray"}>{description}</Text>
          <Text>
            See More
            <FontAwesomeIcon icon={faArrowRight} size="1x" style={{ marginLeft: '4px' }}></FontAwesomeIcon>
          </Text>
      </VStack>
    </VStack>
  );
};

export default Card;
