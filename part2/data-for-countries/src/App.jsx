import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [all, setAll] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((respose) => respose.data)
      .then((data) => {
        setAll(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    setCountries(
      all.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleShow(name) {
    setCountries(
      all.filter(
        (country) => country.name.common.toLowerCase() === name.toLowerCase()
      )
    );
  }

  if (loading) return <h3>loading...</h3>;
  if (error) return <h3>error {error}</h3>;

  return (
    <>
      <p>
        find countries: <input value={search} onChange={handleChange} />
      </p>
      {countries.length >= 10 ? (
        <p>too many matches, specify another filter</p>
      ) : (
        <List countries={countries} handleShow={handleShow} />
      )}
    </>
  );
}

export default App;
