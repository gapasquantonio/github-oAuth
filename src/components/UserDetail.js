import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepo, getStarred, searchUser } from "../redux/actions";
import styled from "styled-components";
import Repos from "./Repos";
import UserDetailData from "./UserDetailData";
import Starred from "./Starred";
import { useParams,useHistory } from "react-router-dom";

function UserDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [clickRepo, setClickRepo] = useState(false);
  const [clickStarred, setClickStarred] = useState(false);
  const found = useSelector((state) => state.found);
  const userData = useSelector((state) => state.githubUser);
  
  useEffect(() => {
    if (!found) {
      history.push("/home");
    }
  }, [found]);
  useEffect(() => {
    if (id) {
      dispatch(searchUser(id));
    }
  }, [id]);
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
      {!found ? (
        <Div className="not-found-text">
          <H1>Sorry, Profile does not exist! </H1>
        </Div>
      ) : (
        <>
          <UserDetailData />
        </>
      )}

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

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
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
const H1 = styled.h1`
  @media (max-width: 322px) {
    font-size: 10px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    font-size: 50px;
  }
  margin-bottom: 20px;
`;

const Div = styled.div`
  text-align: center;
  font-size: 1.25rem;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    display: flex;
  }
`;

export default UserDetail;
