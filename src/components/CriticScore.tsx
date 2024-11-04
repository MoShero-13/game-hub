import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green.600" : score > 60 ? "yellow" : "";

  return (
    <Badge
      color={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
      background={"gray.200"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
