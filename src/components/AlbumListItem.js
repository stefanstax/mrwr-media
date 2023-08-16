import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

const AlbumListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleAlbumDelete = () => {
    removeAlbum(album);
  };
  const header = (
    <div className="flex gap-[10px] justify-start items-center">
      <Button onClick={handleAlbumDelete} loading={results?.isLoading}>
        <GoTrash />
      </Button>
      {album?.title}
    </div>
  );
  return (
    <ExpandablePanel key={album?.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumListItem;
