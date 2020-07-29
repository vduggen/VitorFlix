import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;

  div {
    width: 100%;
    display: inline-block;
    margin-bottom: 50px;
  }

  h1 {
    font-style: normal;
    font: 500 3.75rem 'Roboto', sans-serif;
    line-height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    display: inline-block;
    padding: 25px;
    line-height: 1;
    border-radius: 4px;
  }

  h2 {
    font-style: normal;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 32px;
    font: 500 2.5rem 'Roboto', sans-serif;
  }

  p {
    font: 300 1rem 'Roboto', sans-serif;
  }

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;

    div {
      width: 100%;
    }

    h1 {
      display: none;
      font-size: 18px;
      padding: 10px;
    }

    h2 {
      font-size: 32px;
      text-align: center;
    }

    p {
      display: none;
    }
  }
`;

export const BannerMainContainer = styled.section`
  height: calc(87vh + 94px);
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  padding-top: 94px;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
    padding-top: 40px;
  }

  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const WatchButton = styled.button`
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  color: var(--black);
  background: var(--white);
  border-color: var(--black);
  transition: opacity 0.3s;
  display: none;
  margin: 0 auto;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  @media (max-width: 800px) {
    display: block;
  }
`;
