import { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root borderRadius={10} overflow={"hidden"}>
        <Card.Header p={0} height={"80%"}>
          <Image src={game.background_image} width={"100%"} height={"100%"} />
        </Card.Header>
        <Card.Body>
          <Heading fontSize="2xl">{game.name}</Heading>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
