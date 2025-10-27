import { useState, useEffect } from "react";
import UserCard from "./UserCard";
export default function About() {
  const [users, setUsers] = useState(null);

  useEffect(()=>{
    fetchData();

    // return(()=>{
    //     console.log("Component Unmounted")
    // })
  },[])
  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      // console.log(data);
      setUsers(data?.users);
    } catch (err) {
      console.log(err.message);
    }
  }
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
