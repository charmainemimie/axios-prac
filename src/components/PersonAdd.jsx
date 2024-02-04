import { useState } from "react";
import axios from "axios";
const PersonAdd = () => {
  //hooks
  const [nom, setNom] = useState("");

  const handleChange = (event) => {
    setNom(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: nom,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div>
      {/*a form that allows for user input and subsequently POSTs the content to an API*/}
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PersonAdd;
