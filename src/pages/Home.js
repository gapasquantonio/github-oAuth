import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import UserData from "../components/UserData";
import RepoList from "../components/RepoList";
import SearchBar from "../components/SearchBar";
import { searchUser } from "../redux/actions";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

function Home(props) {
  const found = useSelector((state) => state.found);
  const [data, setData] = useState();
  //const githubUser = useSelector((state) => state.user);
console.log(data)
  const dispatch = useDispatch();

  const onSearch = (x) => {
    setData(x);
  };
  useEffect(() => {
    if (data) {
      dispatch(searchUser(data));
    }
  }, [data]);

  return (
    <div>
      <Header />
      <SearchBar onSearch={onSearch} />
      {!found ? (
        <Div className="not-found-text">
          <H1>Sorry, Profile not found! </H1>
        </Div>
      ) : (
        <>
          <UserData />
          {data?
          <RepoList />:<a/>}
        </>
      )}
    </div>
  );
}
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

const Img = styled.img`
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export default Home;
