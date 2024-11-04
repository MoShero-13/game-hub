import { Card, Skeleton } from "@chakra-ui/react";
import React from "react";
import { SkeletonText } from "./ui/skeleton";

const GameCardSkelton = () => {
  return (
    <Card.Root width="300px" borderRadius={10} overflow={"hidden"}>
      <Skeleton height={"200px"} />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkelton;
