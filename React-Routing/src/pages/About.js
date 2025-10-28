import useGetdata from "../../utils/useGetdata";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserCard from "./UserCard";
export default function About() {
  const users = useGetdata();
  console.log(users);
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>Please check your Internet Connection..</h1>;
  if (users === null) {
    return (
      <>
        <h4>please wait, the details of users to be fetched.</h4>
        {/* In lazy loading it may throws some error dur to react search      for      the About component code, to make it render immediatly, but not found then throws an error, to prevant this we use Suspanse component it takes a properity 'fallback' to render it's content(map be react component or an element) without throwing an error. */}
      </>
    );
  }
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {users.map((user) => {
          return <UserCard key={user.id} details={user} />;
        })}
      </div>
    </>
  );
}
