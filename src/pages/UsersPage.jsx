import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers, searchQueryUsers, setSearchDataUsers} from '../redux/actions/usersActions';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import UsersTopLine from '../components/UsersTopLine/UsersTopLine';
import UsersTable from '../components/UsersTable/UsersTable';
import Button from '@mui/material/Button';
import UserInfoRow from '../components/UserInfoRow/UserInfoRow';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const UsersPage = () => {
  const dispatch = useDispatch();
  const {isLoading, users, search, searchData} = useSelector(({users}) => users);
  const [pickedUser, setPickedUser] = useState(null);
  const [openDetails, setOpenDetails] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleSearch = (e) => {
    let str = e.target.value.toLowerCase();
    dispatch(searchQueryUsers(str));

    const newArr = users.filter(item =>
      item.id.toString().toLowerCase().includes(str) ||
      item.name.toLowerCase().includes(str)
    );

    dispatch(setSearchDataUsers(newArr));
  }

  const handleOpenDialog = (user) => {
    setPickedUser(user);
    setOpenDetails(true);
  }

  const handleCloseDialog = () => {
    setOpenDetails(false);
    setPickedUser(null);
  }

  return (
    <>
      <UsersTopLine onSearch={handleSearch} />
      {
        isLoading
          ? 'Loading Users...'
          : (
            <>
              <UsersTable
                users={search.length > 0 ? searchData : users}
                onPickUser={handleOpenDialog}
              />

              <Dialog
                onClose={handleCloseDialog}
                open={openDetails}
                fullWidth
                maxWidth='sm'
              >
                <DialogTitle onClose={handleCloseDialog}>
                  User Details: <b>{pickedUser?.name}</b>
                </DialogTitle>
                <DialogContent dividers>
                  <UserInfoRow
                    icon={ManageAccountsIcon}
                    title='Username'
                    info={pickedUser?.username}
                  />
                  <UserInfoRow
                    icon={PersonOutlineIcon}
                    title='Name'
                    info={pickedUser?.name}
                  />
                  <UserInfoRow
                    icon={MailOutlineIcon}
                    title='Email address'
                    info={pickedUser?.email}
                  />
                  <UserInfoRow
                    icon={PhoneAndroidIcon}
                    title='Phone'
                    info={pickedUser?.phone}
                  />
                  <UserInfoRow
                    icon={HomeIcon}
                    title='Address'
                    info={`${pickedUser?.address?.street}, ${pickedUser?.address?.suite}, ${pickedUser?.address?.city}`}
                  />
                  <UserInfoRow
                    icon={LanguageIcon}
                    title='Website'
                    info={pickedUser?.website}
                  />
                  <UserInfoRow
                    icon={BusinessIcon}
                    title='Company'
                    info={pickedUser?.company?.name}
                  />
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleCloseDialog}>
                    Close Popup
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          )
      }
    </>
  );
};

export default UsersPage;