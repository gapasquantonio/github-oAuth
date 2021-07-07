import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { getRepo } from "../redux/actions";
import styled from "styled-components";
import { ListItem, List, ListItemText } from "@material-ui/core";

function Repos(props) {
  const { click } = props;
  const repo = useSelector((state) => state.repo);
  const userData = useSelector((state) => state.githubUser);

  return (
    <div>
      {userData.name} Repositories
      <List>
        {Array.isArray(repo) && click ? (
          repo.map((item) => (
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

export default Repos;
