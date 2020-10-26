import React, { useState } from 'react';

import { Avatar, Box, Menu, MenuItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export default function MenuUser(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  //style for link
  const active = {
    fontWeight: "bold",
    color: "black",
    textDecoration: 'underline',
  }
  const styleLink = {
    textDecoration: 'none',
    color: "gray"
  }
  const handleLogout = () => {
    
  }

  return (
    <div>
      <Avatar aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>H</Avatar>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to='/profile' activeStyle={active} style={styleLink}>Profile</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Box style={styleLink} onClick={handleLogout}>Log Out</Box>
        </MenuItem>
      </Menu>
    </div>
  );
}