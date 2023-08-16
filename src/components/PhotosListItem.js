import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

const PhotosListItem = ({ photo }) => {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className="relative" onClick={handleRemovePhoto}>
      <img
        className={`rounded-[20px] drop-shadow-lg`}
        src={photo?.url}
        alt=""
        widt={150}
        height={150}
      />
      <div className="absolute inset-0 rounded-[20px] transition-all cursor-pointer flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-3xl" color="red" />
      </div>
    </div>
  );
};

export default PhotosListItem;
