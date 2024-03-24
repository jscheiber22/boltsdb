import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const SearchBar = ({ onSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    async function handleSearch(event) {
      event.preventDefault();
      try {
        const response = await axios.get(process.env.REACT_APP_API_URI + '/api/searchCars?search=' + encodeURIComponent(searchTerm));
        // Assuming onSearchResults is a callback prop for handling the search results in the parent component
        onSearchResults(response.data);
      } catch (error) {
        console.error('Failed to fetch search results:', error);
      }
    };
  
    return (
      <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'auto',
        }}
        onClick={handleSearch}
      >
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{ mr: 1, flex: 1 }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ p: '10px' }}>
          <SearchIcon />
        </Button>
      </Box>
    );
  }
  
  export default SearchBar;
  