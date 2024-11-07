import {
  MenuRoot,
  MenuTrigger,
  Button,
  MenuContent,
  MenuItem,
} from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" size="sm" marginBottom={5}>
          Oreder by : Relevance
        </Button>
      </MenuTrigger>
      <MenuContent
        position="absolute"
        top="125px"
        left={{ base: "90px", lg: "340px" }}
        width="200px"
        marginBottom={5}
      >
        <MenuItem value="Relevance">Relevance</MenuItem>
        <MenuItem value="Date added">Date added</MenuItem>
        <MenuItem value="Name">Name</MenuItem>
        <MenuItem value="Relase data">Relase data</MenuItem>
        <MenuItem value="Popularity">Popularity</MenuItem>
        <MenuItem value="Average rating">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
