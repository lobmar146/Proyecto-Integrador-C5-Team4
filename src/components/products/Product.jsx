import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Product = () => {
  return (
    <ProductWrapper to={'/product/id'}>
      <img
        src="https://newsport.vtexassets.com/arquivos/ids/13500130/FW9212-A.jpg?v=637883033205600000"
        alt=""
      />
      <div className="content">
          <h2>Botines</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sunt rerum
          </p>
      </div>
    </ProductWrapper>
  );
};

const ProductWrapper = styled(Link)`
  background-color: #e5e5e5;
  width: 250px;
  height: auto;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.6s;
  text-decoration: none;
  color: #000000;

  img {
    width: 100%;
  }

  &:hover {
    transform: scale(1.02);
  }

  .content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
