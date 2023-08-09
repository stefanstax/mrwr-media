import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store/";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
  const { data } = useSelector((state) => {
    return state.users;
  });
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  if (loadingUsersError) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = data.map((user) => {
    return <UsersListItem key={user?.id} user={user} />;
  });

  return (
    <div className="w-full p-4 flex justify-center items-center flex-wrap">
      <div className="w-full flex items-center justify-between mb-8">
        <h1 className="text-xl">Users</h1>
        <Button
          loading={isCreatingUser || isLoadingUsers}
          onClick={handleUserAdd}
        >
          + Add User
        </Button>
      </div>
      {isLoadingUsers ? (
        <Skeleton times={6} className="h-10 w-full" />
      ) : (
        renderedUsers
      )}
    </div>
  );
};

export default UsersList;
