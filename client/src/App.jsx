import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function App() {
  const [clientName, setClientName] = useState('');
  const [violationDate, setViolationDate] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleClientNameChange = (e) => {
    setClientName(e.target.value);
  };

  const handleViolationDateChange = (e) => {
    setViolationDate(e.target.value);
  };


  const handleSearch = async () => {
    try {
      const response = await axios.post('/search', { client_name: clientName, violation_date: violationDate});

      if (response.status === 200) {
        setSearchResult('Search completed');
      } else {
        setSearchResult('Search failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Search for Client</h1>
      <form>
        <label>
          Client Name:
          <input
            type="text"
            value={clientName}
            onChange={handleClientNameChange}
          />
        </label>
        <label>
          Violation Date:
          <input
            type="text"
            value={violationDate}
            onChange={handleViolationDateChange}
          />
        </label>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>
      <div>{searchResult}</div>
    </div>
  );
}

export default App;
