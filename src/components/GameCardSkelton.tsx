import { Card, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GameCardSkelton = () => {
  return (
    <Card.Root>
      <Skeleton width={{ lg: "300px" }} height={"200px"} />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkelton;
