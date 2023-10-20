import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import Status from "./components/Status";
import UserList from "./components/UserList";

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
      
      <Input type="text" className="input-text" placeHolder="Enter text" handleChange={(event) => {
        console.log("something is typed!", event)
      }} />
    </div>
  );
};

export default App;
