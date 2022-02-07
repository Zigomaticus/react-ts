import axios from "axios";
import React, { useState, useEffect } from "react";

import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";

import { IUser } from "./types/types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.primary}
        onClick={(num) => console.log("click", num)}
      >
        <button>Button</button>
        <div>ssss</div>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
