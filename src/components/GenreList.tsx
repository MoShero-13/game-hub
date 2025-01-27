import useGenres from "@/hooks/useGenres";
import { Genre } from "@/entites/Genre";
import getCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
import {
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root listStyleType="none">
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant="plain"
              >
                {genre.name}
              </Link>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
