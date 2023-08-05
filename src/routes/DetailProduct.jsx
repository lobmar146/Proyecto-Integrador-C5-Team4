import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from 'react-icons/bs'

export const DetailProduct = () => {
  return (
    <DetailProductWrapper className="content">
      <h1>Botines</h1>
      <img
        src="https://newsport.vtexassets.com/arquivos/ids/13500130/FW9212-A.jpg?v=637883033205600000"
        alt="botines nike"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio debitis
        enim consequuntur, quam quisquam deleniti magni suscipit vero recusandae
        illo, ipsam, explicabo aut. Asperiores nesciunt autem maiores cum sit
        aliquam! Rerum amet, velit, atque harum quis nam natus sunt omnis
        voluptatem eaque nesciunt et, error voluptatibus. Fugiat repellat
        maiores consequuntur, modi harum magni placeat alias totam, inventore
        vel, nobis voluptas? Ullam, beatae omnis libero nostrum aliquid
        voluptatem? Odit nesciunt nulla, porro accusantium beatae quisquam
        corrupti numquam culpa enim placeat praesentium recusandae! Deserunt,
        atque? Aut corrupti totam aliquam velit facilis error. Totam laboriosam
        aperiam consectetur recusandae iusto eveniet fuga doloremque maxime
        quisquam quas adipisci voluptas neque, asperiores ipsam corporis
        obcaecati delectus. Nobis cumque minus est, laborum eligendi vitae
        facere dolore molestias. Sapiente reprehenderit debitis blanditiis.
        Perferendis accusantium nesciunt porro sunt suscipit dolorem,
        consectetur ipsa totam veniam reprehenderit, nobis reiciendis voluptate
        sit sapiente eos atque, cumque fugit possimus non tempora aliquam saepe.
      </p>
      <Link to={"/"} className="link">
        <BsFillArrowRightSquareFill />
      </Link>
    </DetailProductWrapper>
  );
};

const DetailProductWrapper = styled.section`
  padding: 4rem;
  line-height: 1.2rem;

  img {
    width: 200px;
  }

  .link {
    float: right;
    font-size: 40px;
    color: #302d2d;
    transition: color 0.6s;
  }

  .link:hover {
    color: #000000;
  }
`
