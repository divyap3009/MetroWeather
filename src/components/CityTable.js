
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchCityData } from "../api";
import "../styles/CityTable.css";

function CityTable() {
  const [cities, setCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false); // Track loading state
  const bottomBoundaryRef = useRef(null); // Reference to the bottom of the list

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true when fetching data
      try {
        const data = await fetchCityData(page); // Pass the page number to fetchCityData
        if (data && data.results) {
          setCities((prevCities) => [...prevCities, ...data.results]); // Append new cities to existing ones
        } else {
          console.error("Error: Invalid city data format");
        }
      } catch (error) {
        console.error("Error fetching city data:", error);
      } finally {
        setLoading(false); // Set loading state back to false when data fetching is complete
      }
    };

    fetchData();
  }, [page]); // Fetch data whenever the page number changes

  useEffect(() => {
    const handleScroll = () => {
      if (
        bottomBoundaryRef.current &&
        window.innerHeight + window.scrollY >=
          bottomBoundaryRef.current.offsetTop
      ) {
        setPage((prevPage) => prevPage + 1); // Increment page number when scrolled to the bottom
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Attach scroll event listener when component mounts

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
      <div className="table-container">
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
                  <Link
                    className="city-link"
                    to={`/weather/${city.geoname_id}`}
                  >
                    {city.name}
                  </Link>
                </td>
                <td>{city.cou_name_en}</td>
                <td>{city.timezone}</td>
                <td>{city.population}</td>
                <td>{city.modification_date}</td>
              </tr>
            ))}
            {loading && (
              <tr>
                <td colSpan="6">Loading...</td>
              </tr>
            )}
            <tr ref={bottomBoundaryRef} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CityTable;
