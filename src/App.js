import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

const fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

const App = () => {
  const [name, setName] = useState('');
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="name"
      />
      <Autocomplete
        options={fruits}
        value={selectedFruit}
        onChange={(_, newValue) => setSelectedFruit(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Choose a fruit" data-testid="autocomplete" />
        )}
      />
      <Button type="submit" variant="contained" data-testid="button">
        Submit
      </Button>

      {submitted && (
        <p>
          Hello, {name}! Your favorite fruit is {selectedFruit}.
        </p>
      )}
    </form>
  );
};

export default App;
