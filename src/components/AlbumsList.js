import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

const AlbumsList = ({ user }) => {
  const { data, isLoading, error } = useFetchAlbumsQuery(user);
  useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data?.map((album) => {
      const header = <div>{album?.title}</div>;
      return (
        <ExpandablePanel key={album?.id} header={header}>
          List of photos in the album
        </ExpandablePanel>
      );
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
