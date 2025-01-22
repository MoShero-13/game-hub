import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import useGameQueryStore from "./store";

function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { gameQuery, setSearchText, setGenreId, setPlatformId, setSortOreder } =
    useGameQueryStore();

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem
          area="aside"
          display={{ base: "none", lg: "block" }}
          paddingX={5}
        >
          <GenreList />
        </GridItem>
        <GridItem area="main" width={"96%"} margin={"auto"}>
          <Box margin={"20px 0px"}>
            <GameHeading />
          </Box>
          <HStack>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
