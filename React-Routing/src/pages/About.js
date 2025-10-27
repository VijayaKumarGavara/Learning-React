import useGetdata from "../../utils/useGetdata";
import UserCard from "./UserCard";
export default function About() {

  const users=useGetdata();
  
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
