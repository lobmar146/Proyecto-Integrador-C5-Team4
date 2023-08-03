import { useState, useEffect } from "react";
import styled from "styled-components";

import { GiSoccerBall } from "react-icons/gi";

export default function Footer() {
  const [year, setYear] = useState(0);

  const updateYear = () => {
    let date = new Date();
    let fullYear = date.getFullYear();
    setYear(fullYear);
  };

  useEffect(() => {
    updateYear();
  }, []);

  return (
    <>
      <StyleFooter>
        <div>
          {" "}
          <GiSoccerBall /> 4Football {year} &copy;{" "}
        </div>
      </StyleFooter>
    </>
  );
}
const StyleFooter = styled.footer`
  align-items: center;
  background-color: grey;
  display: flex;
  height: 2rem;
  justify-content: center;
`;
