import styled from "styled-components";

const MainContainer = styled("div")`
.Main-wrapper{
    background-color:white;
    height: 100vh;
}
.nav-bar{
    background-color: #141E46;
    padding: 0.2em;
    width:auto;
    height: 6.3vh;   
    margin-bottom: 0.5em;
    font-weight: 600;
    font-size: 2.5em;
    display: flex;
    align-items: center;
    padding-left: 1em;
   
    .searchbar{
        display:flex;
        color:#BCA37F;
        background-color:#FFF2D8;
        align-items: center;
        flex-direction: row-reverse;
        margin-left: 30em;
        font-size: 0.5em;
        border-radius: 0.3em;
        padding: 0.1em;     
        padding-left: 0.3em;
        
        input{
            background-color:#FFF2D8;
            border-radius: 0.3em;
            width: 50vh;
            height: 2em;
            border: none;
            padding-left: 1em;
            outline: none;
            align-items: center;

        }
        ::placeholder{
            color:#113946;
            font-size: 1em;
            font-weight: 100;
            font-family:Cursive;
        }
    }
    a{
        text-decoration: none;
        color: #BCA37F;
        span{
            color: #EAD7BB;
        }
    }
}
`;


export default MainContainer;