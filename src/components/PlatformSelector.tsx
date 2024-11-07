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
import { Platform } from "@/hooks/useGames";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  onSelectPLatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPLatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" size="sm" marginBottom={5}>
          {selectedPlatform?.name || "Platform"} <IoIosArrowDown />
        </Button>
      </MenuTrigger>
      <MenuContent
        position="absolute"
        top="125px"
        width="200px"
        marginBottom={5}
      >
        {data?.map((platform) => (
          <MenuItem
            onClick={() => onSelectPLatform(platform)}
            key={platform.id}
            value={platform.slug}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
