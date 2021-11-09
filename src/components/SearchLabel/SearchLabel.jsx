import React from 'react';
import {InputAdornment, Input} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useSelector} from 'react-redux';
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
    },
    '@media (max-width: 480px)' : {
      fontSize: 12
    }
  },
});

const SearchLabel = ({onSearch}) => {
  const classes = useStyles();
  const {search} = useSelector(({users}) => users);

  const handleChange = e => {
    onSearch(e);
  }

  return (
    <div className="search-label">
      <Input
        className={classes.input}
        value={search}
        onChange={handleChange}
        placeholder="Search users by name, id"
        startAdornment={<InputAdornment position="start"><SearchIcon sx={{color: '#9EA0A5'}}/></InputAdornment>}
      />
    </div>
  );
};

export default SearchLabel;