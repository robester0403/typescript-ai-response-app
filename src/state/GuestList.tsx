import { useState } from "react";

const GuestList: React.FC = () => {
  const [guestName, setGuestName] = useState<string>("");
  const [guestList, setGuestList] = useState<string[]>([]);

  const onClick = () => {
    setGuestList([...guestList, guestName]);
    setGuestName("");
  };
  return (
    <div>
      <h3>Guest List</h3>
      <input value={guestName} onChange={(e) => setGuestName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
