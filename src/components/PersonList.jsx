import { useState, useEffect } from "react";
import axios from "axios";
const PersonList = () => {
  //hooks
  const [persons, setPersons] = useState([]);

  //use the useEffect hook to handle side effects of fetching data when the component mounts, similar to the componentDidMount method in class components

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const personsData = res.data;
      setPersons(personsData);
    });
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
