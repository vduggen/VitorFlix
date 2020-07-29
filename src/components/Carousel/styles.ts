import styled from 'styled-components';
import colors from '../../styles/colors';

export const Title = styled.h3`
  font-style: normal;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;
  font: 600 2.1875rem 'Roboto', sans-serif;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity 0.3s;
  color: #fff;
  font: 500 1em 'Roboto', sans-serif;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow: auto;
  flex-direction: row;
  transition: ease-in-out 0.5s;

  position: relative;

  .carousel {
    width: 100%;
    display: flex;
    transition: ease-in-out 0.5s;
  }

  &::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }

  &::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }

  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin: 1rem 5%;
  position: relative;

  &:hover {
    .buttonCarousel {
      opacity: 1;
    }
  }

  .buttonL {
    left: 0;
    border-radius: 4px 0 0 4px;
    border: none;
    background: #000000e8;
    color: #fff;
  }

  .buttonR {
    right: 0;
    top: 97px;
    border-radius: 0 1px 1px 0;
    border: none;
    background: #000000e8;
    color: #fff;
  }

  .buttonCarousel {
    position: absolute;
    z-index: 1;
    width: 50px;
    height: 197px;
    background: #000000e8;
    opacity: 0;
    transition: ease-in-out 0.4s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 2.5rem;
    }
  }
`;
