import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import Logo1 from "../assets/logo1.png";
import Home from "../assets/home-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import {
  setUserLoginDetails,
  setSignOutState,
  clearUser,
} from "../redux/actions";

function HeaderUser(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector((state) => state.email);
  const userPhoto = useSelector((state) => state.photo);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);

        //history.push("/home");
      } else {
        history.push("/");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(clearUser());
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(setUserLoginDetails(user));
  };

  return (
    <Nav>
      <NavLink exact to="/">
        <Logo>
          <img src={Logo1} alt="Compasso Uol" />
        </Logo>
      </NavLink>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <NavLink exact to="/home">
              <img src={Home} alt="HOME" />
              <span>HOME</span>
            </NavLink>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 10px;
  display: inline-block;
  background: var(--white-color);
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  @media (max-width: 468px) {
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    @media (max-width: 768px) {
      padding: 0 6px;
    }
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  .favorite {
    @media (max-width: 768px) {
      justify-content: space-between;
    }
  }
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 5px;
  font-size: 10px;
  letter-spacing: 3px;
  width: 200px;
  opacity: 0;
  color: rgb(249, 249, 249);
  a {
    text-decoration: none;
    color: rgb(249, 249, 249);
  }
`;

const SignOut = styled.a`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const UserImg = styled.img`
  height: 100%;
`;
export default HeaderUser;
