import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading
      as="h1"
      marginLeft={{ base: "10px", lg: "0" }}
      fontSize={{ base: "20px", lg: "5xl" }}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;