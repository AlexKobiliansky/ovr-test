import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import SearchLabel from '../SearchLabel/SearchLabel';
import FilterIcon from '@mui/icons-material/FilterAltRounded';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './UsersTopLine.sass';

const FilterButton = styled(Button)(() => ({
  color: '#3A3B3F',
  backgroundColor: '#fafafa',
  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
  borderColor: 'transparent',
  outline: 'none',
  letterSpacing: '1.25px',
  marginRight: '16px',
  '&:hover': {
    borderColor: 'transparent',
    backgroundColor: 'rgba(250, 250, 250, 0.6);'
  },
  '@media (max-width: 780px)' : {
    fontSize: 0,
    paddingLeft: 18,
    minWidth: 50,
    width: 50,
    textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    '& .MuiButton-startIcon': {
      marginRight: 0
    }
  },
  '@media (max-width: 480px)' : {
    paddingTop: 4,
    paddingBottom: 4
  },
  '@media (max-width: 390px)' : {
    minWidth: 40,
    width: 40,
    marginRight: 8,
    paddingLeft: 13,
  }
}));

const UsersTopLine = ({onSearch}) => {
  return (
    <div className="users-topline">
      <div className="users-topline-filters">
        <FilterButton
          variant="outlined"
          startIcon={<FilterIcon sx={{ color: '#9EA0A5' }} />}
          onClick={() => console.log('filter')}
        >
          <span>Filter</span>
        </FilterButton>
        <SearchLabel onSearch={onSearch} />
      </div>

      <Button variant="contained" startIcon={<AddOutlinedIcon />} >
        Add User
      </Button>
    </div>
  );
};

export default UsersTopLine;