import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchStarships } from "../apiService";
import StarshipList from "../Ui/molecules/StarshipList";
import DotLoader from "react-spinners/DotLoader";

const StarshipsContainer = styled.div`
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
  padding: 20px;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubHeader = styled.h2`
  margin-top: 0;
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  align-items: center;
`;

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const starshipsData = await fetchStarships();
        const sortedStarships = starshipsData.sort((a, b) => {
          const crewA = parseInt(a.crew.split("-")[1]) || parseInt(a.crew);
          const crewB = parseInt(b.crew.split("-")[1]) || parseInt(b.crew);
          return crewA - crewB;
        });
        const filteredStarships = sortedStarships.filter(
          (starship) => starship.crew <= 10
        );
        const maxFilms = Math.max(
          ...filteredStarships.map((starship) => starship.films.length)
        );

        const starshipsWithFilmsFlag = filteredStarships.map((starship) => ({
          ...starship,
          hasMoreFilms: starship.films.length === maxFilms,
        }));

        setStarships(starshipsWithFilmsFlag);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <StarshipsContainer loading={!loading}>
      {loading ? (
        <LoaderContainer>
          <DotLoader color="#36d7b7" />
        </LoaderContainer>
      ) : (
        <SubHeader>
          Discover the amazing starships from the Star Wars universe
        </SubHeader>
      )}
      <StarshipList starships={starships} />
    </StarshipsContainer>
  );
};

export default Starships;
