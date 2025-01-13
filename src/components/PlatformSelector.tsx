import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import { Button, MenuContent, MenuItem, MenuTrigger } from "@chakra-ui/react";
import { MenuRoot } from "./ui/menu";
import { IoIosArrowDown } from "react-icons/io";
import usePlatform from "@/hooks/usePlatform";

interface Props {
  onSelectPLatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPLatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

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
        top="200px" // Consider using relative units or removing hardcoded position
        width="200px"
        marginBottom={5}
      >
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPLatform(platform)} // Fixed the typo here as well
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
