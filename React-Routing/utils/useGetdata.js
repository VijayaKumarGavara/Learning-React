import { useState, useEffect } from "react";
export default function useGetdata() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
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
  return users;
}
