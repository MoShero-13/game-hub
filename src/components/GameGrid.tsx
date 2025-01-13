import useGames from "@/hooks/useGames";
import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="30px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkelton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading" : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GameGrid;
