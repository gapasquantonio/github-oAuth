import React from "react";
import styled from "styled-components";
import imageOne from "../assets/logo1.png";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import { setUserLoginDetails, setSignOutState } from "../redux/actions";
import { useHistory } from "react-router-dom";
const Login = () => {
  const userName = useSelector((state) => state.email);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Container>
      <Content>
        <CTA>
          <Div>
            <CTALogoOne src={imageOne} alt="" />
            <h4>FRONTEND COMPASSO UOL - GITHUB API</h4>
          </Div>
          <SignUp onClick={handleAuth}>GO TO HOME PAGE</SignUp>
          <Description>
          Welcome to the practice test for frontend develper position at Compasso UOL.The general idea is to create an application in which you can consume the github Api as long as you are loged in.
           
          </Description>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-size: larger;
  }
  @media only screen and (max-width: 768px) {
    h4 {
      font-size: 22px;
    }
  }
`;
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10cw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/compassouol.jpg");
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 10px;
  max-width: 150px;
  min-height: 1px;
  display: block;
  width: 100%;
  background: var(--font-light-color);
  @media only screen and (max-width: 768px) {
    max-width: 90px;
  }
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #090b13;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: var(--font-light-color);
  }
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Description = styled.h2`
  color: var(--font-light-color);
  font-size: 18px;
  margin: 0 0 24px;
  line-height: 1.6;
  letter-spacing: 1.8px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    display: flex;
  }
`;

export default Login;
