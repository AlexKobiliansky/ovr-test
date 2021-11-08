import { styled } from '@mui/material/styles';
import {Select} from '@mui/material';

export const CustomSelect = styled(Select)(() => ({
  padding: 0,
  border: 0,
  fontSize: 14,
  fontWeight: 500,
  '& .MuiSelect-select': {
    padding: 0,
    border: 0
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '& .MuiSvgIcon-root': {
    right: 0,
    color: '#9EA0A5'
  }
}));