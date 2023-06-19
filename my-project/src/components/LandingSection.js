import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import photo6 from "../images4/photo6.jpeg"


const greeting = "Hello, I am Jeremiah Eromosele";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <VStack>
      <Avatar src={photo6} size={"2xl"} />
        <Heading>{greeting}</Heading></VStack>
      <VStack>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading></VStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;