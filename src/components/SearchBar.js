import React, { useState } from "react";
import styled from "styled-components";

function SearchBar(props) {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);

    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    if (!search) {
      alert("please fill with data ");
    } else {
      onSearch(search);
      await setSearch("");
    }
  };

  return (
    <Container>
      <Div>
        <Input
          value={search}
          placeholder="Search GitHub User"
          onChange={onChange}
        />
      </Div>
      <div>
        <Button onClick={onClick}>Search</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0px 10px;
  padding: 0;
  align-items: center;
  flex: 1;
  align-items: stretch;
  margin-top: 120px;
  padding: 5px;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    padding: 5px;
    margin-bottom: 5px;
    margin-top: 100px;
  }
`;

const Button = styled.button`
  background-color: #363636;
  border: none;
  border-radius: 10px;
  height: 100%;
  color: white;
  padding: 10px 12px;
  margin-left: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: medium;
  }
`;

const Input = styled.input`
  width: 600px;
  margin-right: 10px;
  padding: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: none;
  width: 100%;
  @media (max-width: 768px) {
    font-size: medium;
  }
`;

const Div = styled.div`
  background: white;
  flex: 1;
`;

export default SearchBar;
