import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;
  font: 600 2.1875rem 'Roboto',sans-serif;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  color: #fff;
  font:500 1em 'Roboto',sans-serif;
  &:hover,
  &:focus {
    opacity: .5;
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
  overflow-x: auto;
  flex-direction: row;

  &::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }

  &::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;
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
`;
