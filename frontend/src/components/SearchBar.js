import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState({});
  
    async function handleSearch(event) {
      event.preventDefault();
      // Implement your search logic here
      await axios
            .get('http://localhost:5432/search/' + event.target.value)
            .then((response) => {
                console.log(response.data);
                setSearchResults(response.data);
            })
    //   console.log(searchTerm);
    };
  
    return (
      <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'auto',
        }}
        onSubmit={handleSearch}
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
        { searchResults &&
            <p>{searchResults[0]}</p>
        }
      </Box>
    );
  }
  
  export default SearchBar;
  