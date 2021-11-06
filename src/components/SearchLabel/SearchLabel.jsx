import React, {useState} from 'react';
import {InputAdornment, Input} from '@mui/material';
import {makeStyles} from '@mui/styles';
import SearchIcon from '@mui/icons-material/SearchRounded';
import './SearchLabel.sass';

const useStyles = makeStyles({
  input: {
    width: '100%',
    background: '#fff',
    borderRadius: '4px',
    padding: '2px 10px',
    '&:before': {
      borderBottom: 'none!important',
    }
  },
});

const SearchLabel = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  return (
    <div className="search-label">
      <Input
        className={classes.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search users by name, id"
        startAdornment={<InputAdornment position="start"><SearchIcon sx={{color: '#9EA0A5'}}/></InputAdornment>}
      />
    </div>
  );
};

export default SearchLabel;