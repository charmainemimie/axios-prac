import { useState, useEffect } from "react";
import axios from "axios";
const PersonList = () => {
  //hooks
  const [persons, setPersons] = useState([]);

  //use the useEffect hook to handle side effects of fetching data when the component mounts, similar to the componentDidMount method in class components

  useEffect(() => {

    // axios.get(url) with a URL from an API endpoint to get a promise which returns a response object. Inside the response object, there is data that is then assigned the value of person.
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const personsData = res.data;
      setPersons(personsData);
    });
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div>
      <ul>
        {persons.map((person) => (
            <>
          <li>{person.name}{' - '}{person.username}</li>
       
          </>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
