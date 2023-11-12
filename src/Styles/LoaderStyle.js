import styled from "styled-components";

const LoaderContainer = styled.div`
overflow: hidden;
background: white; 
  width: auto;
  height: 90vh;
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

@media screen and (max-width: 768px) {

    width: auto;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
        
    img{
        width: 14vw;
    }
    p{
        font-size: 1.4rem;

    }
}
`;

export default LoaderContainer;