import styled from "styled-components";

const LoaderContainer = styled.div`
/* background-color: white;
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, 50%); */
background: white; /* Set the background color to white */
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
img{
    height: auto;
    width:12vw;
    margin: 0 auto;
    display: block;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
}
p{
    font-family: cursive;
    text-align: center;
    font-size: 1.5rem;
    overflow-wrap: break-word;
    /* position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%); */
}

`;

export default LoaderContainer;