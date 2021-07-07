import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import GitHubIcon from "@material-ui/icons/GitHub";
function UserDetailData() {
  const userData = useSelector((state) => state.githubUser);

  return (
    <ContainerDiv>
      {userData ? (
        <>
          <Container>
            <H1>
              {userData.name ? userData.name : userData.login} Github Info{" "}
            </H1>
          </Container>
          <Content>
            {userData ? (
              <Card>
                <Wrap key={userData.name}>
                  <a href={`${userData.html_url}`} target="blank">
                    <img src={userData.avatar_url} alt={userData.name} />
                  </a>
                </Wrap>
                <Bottom>
                  <Div>
                    <H4>
                      Name:{" "}
                      {userData.name ? userData.name : "User without Name"}
                    </H4>
                    <H4>Login: {userData.login}</H4>
                  </Div>
                </Bottom>
              </Card>
            ) : (
              <H1>Loading...</H1>
            )}
          </Content>
        </>
      ) : (
        <DivNoData>
          <H1>Please search for your github profile </H1>
          <GitHubIcon style={{ fontSize: 100 }} />
        </DivNoData>
      )}
    </ContainerDiv>
  );
}
const ContainerDiv = styled.div`
  margin-top: 100px;
`;
const DivNoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
  padding: 5%;
`;

const Div = styled.div`
  display: row;
`;
const H4 = styled.h4`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    font-size: smaller;
  }
`;

const H1 = styled.h1`
  @media (min-width: 769px) and (max-width: 1768px) {
    font-size: xx-large;
  }
  @media (max-width: 768px) {
    font-size: x-large;
  }
  @media (max-width: 468px) {
    font-size: large;
  }
`;

const Container = styled.div`
  top: 105px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (max-width: 1280px) {
    top: 105px;
    padding: 10px;
  }
  @media (max-width: 768px) {
    top: 105px;
    padding: 10px;
  }
`;

const Bottom = styled.div`
  margin-top: 20px;
  display: row;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 768px) {
    margin-top: 5px;
    padding: 10px;
  }
  @media (max-width: 1280px) {
    margin-top: 5px;
    padding: 10px;
  }
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
const Content = styled.div`
  padding: 20px;

  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 10px;
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 10px;
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 10px;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 10px;
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;

export default UserDetailData;
