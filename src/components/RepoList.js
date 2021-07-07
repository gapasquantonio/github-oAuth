import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepo, getStarred } from "../redux/actions";
import styled from "styled-components";
import Repos from "./Repos";
import Starred from "./Starred";
import UserData from "./UserData";

function RepoList() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.githubUser);
  const [clickRepo, setClickRepo] = useState(false);
  const [clickStarred, setClickStarred] = useState(false);

  useEffect(() => {
    if (userData) {
      dispatch(getRepo(userData.login));
    }
  }, [clickRepo]);
  useEffect(() => {
    if (userData) {
      dispatch(getStarred(userData.login));
    }
  }, [clickStarred]);

  return (
    <div>
      <Buttons>
        <Button onClick={() => setClickRepo(!clickRepo)}>
          {!clickRepo ? "Show Repos" : "Hide Repos"}
        </Button>
        <Button onClick={() => setClickStarred(!clickStarred)}>
          {!clickStarred ? "Show Starred" : "Hide Starred"}
        </Button>
      </Buttons>
      <ButtonsII>
        {clickRepo ? <Repos click={clickRepo} /> : <a />}

        {clickStarred ? <Starred click={clickStarred} /> : <a />}
      </ButtonsII>
    </div>
  );
}
const Button = styled.button`
  width: 100%;
  height: 100%;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  @media (max-width: 608px) {
    height: auto;
  }
`;
const ButtonsII = styled.div`
  @media (min-width: 770px) {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }
  @media (max-width: 768px) {
    display: row;
    justify-content: space-around;
    padding: 10px;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;
export default RepoList;
