import Card from "./index";
import { Box, Flex } from "theme-ui";
import { storiesOf } from "@storybook/react";

storiesOf("Components/Card", Card)
  .add("Default", () => (
    <Card
      bgColor="red"
      title="Lorem Ipsum"
      summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      category="category"
      image="https://picsum.photos/600/800?grayscale"
      primaryCta="Read more"
      primaryLink="#"
    />
  ))
  .add("Text Only", () => (
    <Box
      sx={{
        width: "480px",
        height: "720px"
      }}
    >
      <Card
        bgColor="goldenrod"
        title="Lorem Ipsum"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        category="category"
        image="https://picsum.photos/600/800?grayscale"
        variant="text-only"
        primaryCta="Read more"
        primaryLink="#"
        secondaryCta="Wikipedia"
        secondaryLink="#"
      />
    </Box>
  ))
  .add("Background Image", () => (
    <Box
      sx={{
        width: "480px",
        height: "720px"
      }}
    >
      <Card
        title="Lorem Ipsum"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        category="category"
        image="https://picsum.photos/600/800?grayscale"
        variant="bg-image"
      />
    </Box>
  ))
  .add("Grid", () => (
    <Flex
      sx={{
        flexWrap: "wrap"
      }}
    >
      <Box
        sx={{
          flex: "1 1 33%",
          mr: "0.33%"
        }}
      >
        <Card
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          category="category"
          image="https://picsum.photos/600/800?grayscale"
        />
      </Box>
      <Box
        sx={{
          flex: "1 1 33%",
          mr: "0.33%"
        }}
      >
        <Card
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          category="category"
          image="https://picsum.photos/600/800?grayscale"
        />
      </Box>
      <Box
        sx={{
          flex: "1 1 33%",
          mr: "0.33%"
        }}
      >
        <Card
          title="Lorem Ipsum"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          category="category"
          image="https://picsum.photos/600/800?grayscale"
        />
      </Box>
    </Flex>
  ));
