
import { createContext, useState } from "react";

export const GuestContext = createContext();

const GuestContextProvider = ({ children }) => {
 const [adult, setAdult] = useState(0);
  const [childrens, setchildrens] = useState(0);
  const [room, setroom] = useState(0);
  const handleIncrement = () => {
    setAdult((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setAdult((prev) => prev - 1);
  };
  const handlechildrenIncre = () => {
    setchildrens((prev) => prev + 1);
  };
  const handlechildrenDec = () => {
    setchildrens((prev) => prev - 1);
  };
  const handleroomIncre = () => {
    setroom((prev) => prev + 1);
  };
  const handleroomDec = () => {
    setroom((prev) => prev - 1);
  };

  const [date, setDate] = useState([
    new Date('2024-10-30 01:00:00'),
    new Date('2024-10-30 14:00:00')
  ]);

  
  return (
    <GuestContext.Provider value={{
        adult,
        handleIncrement,
        handleDecrement,
        childrens,
        handlechildrenIncre,
        handlechildrenDec,
        room,
        handleroomIncre,
        handleroomDec,
        date,
        setDate
      }}> 
      {children}
    </GuestContext.Provider>
  );
};

export default GuestContextProvider;