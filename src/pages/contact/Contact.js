import React, { Component } from 'react';

import ProfileModal from './../../components/profiles/ProfilesModal';

import {
  IconButton,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

class Contact extends Component {
  render() {
    let user = this.props.contactData;
    let btnAddDel

    if (user.friend) {
      btnAddDel =  <ListItemSecondaryAction onClick={() => this.props.deleteContact(user.id)}>
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
    } else {
      btnAddDel =  <ListItemSecondaryAction onClick={() => this.props.addContact(user.id)}>
      <IconButton edge="end" aria-label="addFriend">
        <AddIcon />
      </IconButton>
    </ListItemSecondaryAction>
    }

    return (
      <ListItem>
        <ListItemAvatar>
          <ProfileModal user={user}>
            <Avatar src={user.avatar ? user.avatar : ''}>
              {user.name && user.name.charAt(0)}
            </Avatar>
          </ProfileModal>
        </ListItemAvatar>
        <ProfileModal user={user}>
          <ListItemText primary={user.name} secondary={user.phone} />
        </ProfileModal>
        {btnAddDel}
      </ListItem>
    );
  }
}

export default Contact;
