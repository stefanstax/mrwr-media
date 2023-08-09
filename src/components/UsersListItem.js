import { GoTrash } from "react-icons/go";
import { useThunk } from "../hooks/useThunk";
import Button from "./Button";
import { removeUser } from "../store/thunks/removeUser";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleUserRemove = () => {
    doRemoveUser(user);
  };
  return (
    <div
      key={user?.id}
      className="w-full mb-2 p-2 border rounded flex justify-start items-center gap-[20px]"
    >
      <Button
        danger
        className="rounded-[5px]"
        loading={isLoading}
        onClick={handleUserRemove}
      >
        <GoTrash fontSize={18} />
      </Button>
      <div className="flex justify-between items-center cursor-pointer">
        {error && <div>Error deleting user.</div>}
        {user?.name}
      </div>
    </div>
  );
};

export default UsersListItem;
