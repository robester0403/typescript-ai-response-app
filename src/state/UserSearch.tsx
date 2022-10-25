import React, { useState } from "react";

type UserProfile = { name: string; age: number };

const usersData = [
  {
    name: "Sarah",
    age: 22,
  },
  {
    name: "Bob",
    age: 22,
  },
  {
    name: "Macintire",
    age: 22,
  },
];

const UserSearch: React.FC = () => {
  const [searchName, setSearchName] = useState<string>("");
  const [searchResult, setSearchResult] = useState<UserProfile | undefined>();

  const onClick = () => {
    const foundUser = usersData.find(({ name }) => name === searchName);
    setSearchResult(foundUser);
  };
  return (
    <div>
      <input
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button onClick={onClick}>Click Me</button>
      {searchResult && searchResult.name}
    </div>
  );
};

export default UserSearch;
