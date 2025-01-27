import usePlatforms from "@/hooks/usePlatforms";
import { Button, MenuContent, MenuItem, MenuTrigger } from "@chakra-ui/react";
import { MenuRoot } from "./ui/menu";
import { IoIosArrowDown } from "react-icons/io";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
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
            onClick={() => setSelectedPlatformId(platform.id)} // Fixed the typo here as well
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
