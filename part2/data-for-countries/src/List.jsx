import Weather from "./Weather";
function Detail({ country }) {
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}km</p>
      <h3>languages</h3>
      <ul>
        {Object.entries(country.languages).map(([key, value]) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        style={{ height: "200px", width: "200px" }}
      />
      <Weather country={country} />
    </>
  );
}

function List({ countries, handleShow }) {
  return (
    <div>
      {countries.length === 1 ? (
        <Detail country={countries[0]} />
      ) : (
        countries.map((country) => (
          <p key={country.name.common}>
            {country.name.common}{" "}
            <button
              onClick={() => {
                handleShow(country.name.common);
              }}
            >
              show
            </button>
          </p>
        ))
      )}
    </div>
  );
}

export default List;
