import { GoTrash } from "react-icons/go";
import { useThunk } from "../hooks/useThunk";
import Button from "./Button";
import { removeUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleUserRemove = () => {
    doRemoveUser(user);
  };

  const header = (
    <div className="flex gap-[20px] justify-center items-center">
      <Button
        className="rounded-[5px]"
        loading={isLoading}
        onClick={handleUserRemove}
      >
        <GoTrash fontSize={18} />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user?.name}
    </div>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
