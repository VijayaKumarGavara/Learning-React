import useGetdata from "../../utils/useGetdata";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserCard from "./UserCard";
export default function About() {

  const users=useGetdata();
  const onlineStatus=useOnlineStatus();
  if(!onlineStatus) return <h1>Please check your Internet Connection..</h1>
  if (users === null) {
    return (
      <>
        <h4>{"Vijaya Kumar" + " " + "Gavara"} - SDE</h4>
      </>
    );
  }
  return (
    <>
      
      {users.map((user) => {
        return <UserCard key={user.id} details={user} />;
      })}
    </>
  );
}
