import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCityData } from "../api";
import "../styles/CityTable.css";

function CityTable() {
  const [cities, setCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCityData();
        if (data && data.results) {
          setCities(data.results); // Set the cities array from data.results
        } else {
          console.error("Error: Invalid city data format");
        }
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter cities based on search query
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="city-table-container">
      <header className="header">
        <h1 className="heading">City Table</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search city..."
          className="search-input"
        />
      </header>
      <table className="city-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Country</th>
            <th>Timezone</th>
            <th>Population</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredCities.map((city, index) => (
            <tr key={city.geoname_id}>
              <td>{index + 1}</td>
              <td>
                <Link className="city-link" to={`/weather/${city.geoname_id}`}>
                  {city.name}
                </Link>
              </td>
              <td>{city.cou_name_en}</td>
              <td>{city.timezone}</td>
              <td>{city.population}</td>
              <td>{city.modification_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CityTable;
