import { useState } from "react";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import Status from "./components/Status";
import UserList from "./components/UserList";
import Container from "./components/Container";

const App = () => {
  const PersonName = {
    first: "Twinkle",
    last: "Goyal",
  };

  const userList = [
    {
      first: "Pulkit",
      last: "Garg",
    },
    {
      first: "Gagan",
      last: "Bansal",
    },
    {
      first: "Nitin",
      last: "Goyal",
    },
  ];

  const [inputValue, setInputValue] = useState("");
  
  return (
    <div className="App">
      <Greet name="Twinkle" messageCount={20} isLogin={true} />

      <Person personName={PersonName} />
      
      <UserList userList={userList} />
      
      <Status status="success" />
      
      <Heading>Placeholder Text</Heading>
      
      <Oscar>
        <Heading>I'm children component of Oscar</Heading>
      </Oscar>
      
      <Greet name="Twinkle" isLogin={true} />
      
      <Button className="btn" handleClick={(event) => {
        console.log("Button is clicked!", event)
      }} />
      
      <Input type="text" value={inputValue} className="input-text" placeHolder="Enter text" handleChange={(event) => {
        setInputValue(event.target.value);
      }} />

      <Container styles={{border: '1px solid black', padding: '8px 12px'}} containerText='This is a Conatiner with a basic text!' />
    </div>
  );
};

export default App;
