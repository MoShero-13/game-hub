import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        marginLeft={2}
        fontWeight="bold"
        background="#F9EE7E"
        color="#000"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
