
### Infinite Scroll - Forecast Web Application

This project is a weather forecast web application built using **React**. It allows users to view weather information for various cities, including current weather conditions, temperature, humidity, wind speed, and atmospheric pressure. Additionally, users can search for cities, sort and filter the city data, and click on a city to view detailed weather forecasts.

### **Deployment:**

The application is deployed and accessible at https://metroweather.onrender.com/

#### Core Features

- **Display Cities in a Table:** Show all cities in a table format with infinite scroll. The table includes columns for city name, country, timezone, etc.
- **Search as You Type:** Implement autocomplete search functionality to suggest possible locations as users type.
- **Filtering and Sorting:** Allow users to filter and sort each column in the cities table.
- **City Weather Page:** Clicking on a city name redirects users to a weather page for that city. Use the **OpenWeatherMap API** to display weather information, including current weather, forecast, temperature highs and lows, weather descriptions, and precipitation chances.
- **Responsive Design:** Ensure the application is responsive and works well on different screen sizes. Implement media queries or responsive design techniques.
- **Error Handling:** Gracefully handle errors in case of failed API requests or invalid search queries. Display error messages to users when necessary.
- **State Management:** Utilize React state management to display data and avoid re-fetching. Manage weather data state centrally and pass down necessary data as props.
- **Type Safety:** Utilize **TypeScript** for type safety throughout the application. Define interfaces or types for weather objects and API responses.

#### Optional Features

- **Dynamic Backgrounds:** Implement dynamic backgrounds based on the current weather conditions.
- **Unit Conversion:** Provide options to switch between different units of measurement (e.g., Celsius/Fahrenheit, metric/imperial).
- **Favorite Locations:** Add a feature to save favorite locations for quick access.
- **Geolocation:** Implement geolocation to automatically detect and display the weather for the user's current location.

#### Technologies Used

- **React**
- **OpenWeatherMap API**
- **Styled Components**

#### Installation and Setup

1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd weather-forecast`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

#### License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
