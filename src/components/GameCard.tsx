import { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformsIconList from "./PlatformsIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root>
        <Card.Header p={0} height={"80%"}>
          <Image
            src={getCroppedImageUrl(game.background_image)}
            width={"100%"}
            height={"100%"}
          />
        </Card.Header>
        <Card.Body>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformsIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name} <Emoji rating={game.rating_top} />
          </Heading>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
