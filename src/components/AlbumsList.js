import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";

const AlbumsList = ({ user }) => {
  const { data, isLoading, error } = useFetchAlbumsQuery(user);
  useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data?.map((album) => {
      return <AlbumListItem album={album} />;
    });
  }

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex gap-[20px] flex-wrap justify-between items-center">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={results?.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div className="mb-2">{content}</div>
    </div>
  );
};

export default AlbumsList;
