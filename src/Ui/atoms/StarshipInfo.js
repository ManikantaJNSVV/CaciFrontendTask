import React from "react";
import styled, { keyframes } from "styled-components";

const StarshipContainer = styled.div`
  background-color: #f5f5f5;
  background-image: url("https://www.shutterstock.com/shutterstock/photos/705908287/display_1500/stock-photo-alien-spaceship-fleet-above-the-grand-canyon-in-canyonlands-utah-usa-for-futuristic-fantasy-705908287.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 300px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

const StarIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #ffcc00;
  animation: ${pulse} 1s ease infinite;
  pointer: none;
  &:hover {
    animation: none;
    transform: scale(1.5);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Property = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-size: 14px;
  color: #ccc;
`;

const Value = styled.div`
  font-size: 16px;
  color: #fff;
`;

const StarshipInfo = ({ name, model, films, hasMoreFilms }) => (
  <StarshipContainer>
    <CardContent>
      {hasMoreFilms && <StarIcon>🌟</StarIcon>}
      <Title>{name}</Title>
      <Property>
        <Label>Model:</Label>
        <Value>{model}</Value>
      </Property>
      <Property>
        <Label>Films:</Label>
        <Value>{films}</Value>
      </Property>
    </CardContent>
  </StarshipContainer>
);

export default StarshipInfo;
