import styled from "styled-components";

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
  padding: 0vw 3vw;
  mix-blend-mode: difference;
  z-index: 9999;

  .lft-nav {
    /* background-color: red; */
    font-size: 1.5vw;
    height: 7vh;
    overflow: hidden;
    cursor: pointer;

    h1 {
      color: #fff;
      transition: all cubic-bezier(0.19, 1, 0.22, 1) 1s;
    }

    &:hover {
      #logo {
        margin-top: -8vh;
      }
    }
  }

  .rght-nav {
    /* background-color: red; */
    font-size: 0.8vw;
    height: 3vh;
    overflow: hidden;
    cursor: pointer;

    h2 {
      color: #fff;
      transition: all cubic-bezier(0.19, 1, 0.22, 1) 1s;
    }

    &:hover #nav-contact {
      margin-top: -3.5vh;
    }
  }
`;