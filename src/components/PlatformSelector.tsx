import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Select,
} from "@chakra-ui/react";
import { MenuRoot } from "./ui/menu";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" size="sm" marginBottom={5}>
          Platforms
        </Button>
      </MenuTrigger>
      <MenuContent
        position="absolute"
        top="125px"
        width="200px"
        marginBottom={5}
      >
        {data?.map((platform) => (
          <MenuItem key={platform.id} value={platform.slug}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
