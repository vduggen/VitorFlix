import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.header`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: ${colors.black};
  border-bottom: 2px solid ${colors.primary};

  nav {
    a {
      color: ${colors.white};
      border: 1px solid ${colors.white};
      box-sizing: border-box;
      cursor: pointer;
      padding: 16px 24px;
      font-style: normal;
      outline: none;
      border-radius: 5px;
      text-decoration: none;
      display: inline-block;
      transition: opacity 0.3s;
      font: bold 1rem 'Roboto', sans-serif;

      &:first-child {
        margin-right: 1rem;
      }

      &:hover,
      &:focus {
        opacity: 0.5;
      }
    }
  }

  .Logo {
    max-width: 168px;
  }

  @media (max-width: 800px) {
    justify-content: center;

    nav {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;

      display: flex;
      align-items: center;
      justify-content: space-around;

      a {
        border-radius: 0;
        border: 0;
        text-align: center;
        width: 100%;

        &:first-child {
          margin-right: 0;
          background: ${colors.red};
        }

        &:last-child {
          background: ${colors.primary};
        }
      }
    }
  }
`;
