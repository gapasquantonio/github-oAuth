import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { getRepo } from "../redux/actions";
import styled from "styled-components";
import { ListItem,List,ListItemText } from '@material-ui/core'

function Starred(props) {
    const {click} = props
  const starred = useSelector((state) => state.starred);
  const userData = useSelector((state) => state.githubUser);
  return (
    <div>
      {userData.name} Starred
      <List>
        {Array.isArray(starred) && click ? (
          starred.map((item) => (
            <ListItem key={item.id}>
              <a href={item.html_url} target="blank">
                <ListItemText>{item.name}</ListItemText>
              </a>
            </ListItem>
          ))
        ) : (
          <h1/>
        )}
      </List>
    </div>
  );
}

export default Starred;