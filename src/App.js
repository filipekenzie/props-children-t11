import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Main from "./components/Main";

function App() {
  const people = [
    { name: "Filipe", age: "29" },
    { name: "Anna", age: "30", stack: ["JS", "React", "Node", "Postgres"] },
    { name: "Pedro", age: "23", stack: ["Dotnet", "Angular"] },
    { name: "Josh", age: "40", stack: ["Python", "Django", "React Native"] },
    { name: "Kate", age: "25", stack: ["Java", "Spring Framework"] },
  ];

  return (
    <Main>
      {people.map((person, index) => (
        <Profile
          key={index}
          name={person.name}
          age={person.age}
          stack={person.stack}
        />
      ))}
    </Main>
  );
}

export default App;
