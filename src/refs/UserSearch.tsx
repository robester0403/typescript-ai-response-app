import React, { useState, useRef, useEffect } from "react";

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

// generally typescript is concerned that the refs might not actually be assigned
const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null); // ref might not be assigned so we need the nulls

  useEffect(() => {
    if (!inputRef.current){ // NOTE this is to say that if the ref isn't there get rid of it.
      return;
    }
    inputRef.current.focus()
  }, [])
  
  const [searchName, setSearchName] = useState<string>("");
  const [searchResult, setSearchResult] = useState<UserProfile | undefined>();

  const onClick = () => {
    const foundUser = usersData.find(({ name }) => name === searchName);
    setSearchResult(foundUser);
  };
  return (
    <div>
      <input
        ref={inputRef}
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button onClick={onClick}>Click Me</button>
      {searchResult && searchResult.name}
    </div>
  );
};

export default UserSearch;
