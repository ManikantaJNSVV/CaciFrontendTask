import React from "react";
import styled from "styled-components";
import StarshipInfo from "../atoms/StarshipInfo";

const StarshipListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const StarshipList = ({ starships }) => (
  <StarshipListContainer>
    {starships.map((starship) => (
      <StarshipInfo
        key={starship.name}
        hasMoreFilms={starship.hasMoreFilms}
        name={starship.name}
        model={starship.model}
        films={starship.films.length}
      />
    ))}
  </StarshipListContainer>
);

export default StarshipList;
