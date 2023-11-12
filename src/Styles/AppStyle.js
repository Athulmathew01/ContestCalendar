import styled from "styled-components";

const MainContainer = styled("div")`
#small-title{
    display: none;
}
.Main-wrapper{
    background-color:white;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    /* margin-right: 20px; */
    
}
@media screen and (max-width: 768px) {
    overflow-x: hidden;
    .Main-wrapper{
        background-color:white;
        height: 96vh;
        width: 100%;
        margin: 0 auto;
 

    }

}
.nav-bar{
    background-color: #141E46;
    width:100%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0.2em;
    height: 6.1vh;  
    font-weight: 600;
    font-size: 2.3rem;
    padding-left: 1rem;
    a{
        text-decoration: none;
        color: #BCA37F;
        margin-right: 1em;
        span{
            color: #EAD7BB;
        }
    } 
    
    .searchbar{
        display:flex;
        color:#BCA37F;
        background-color:#FFF2D8;
        width: 30vh;
        align-items: center;
        flex-direction: row-reverse;
        font-size: 0.5em;
        border-radius: 0.3em;
        padding: 0.1em;
        margin-right: 2em;       

        
        input{
            background-color:#FFF2D8;
            border-radius: 0.3em;
            width: 25vh;
            height: 2em;
            border: none;
            padding-left: 1em;
            outline: none;
            align-items: center;

        }
        ::placeholder{
            color:#113946;
            font-size: 0.8rem;
            font-weight: 100;
            font-family:Cursive;
        }
    }

}
@media screen and (max-width: 768px) {
#big-title{
    display: none;
}
#small-title{
    display: block;
}
    .nav-bar{
        background-color: #141E46;
        width:100%;
        padding: 0.2em;
        height: 5.1vh;
        margin: 0;
        padding-left: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .searchbar{

            width: 20vh;
            border-radius: 0.7em;
            padding: 0.4em;
            margin-right: 2em; 
            font-size: 1rem;
            input{
                margin-right: 2em; 
                background-color:#FFF2D8;
                border-radius: 0.5em;
                width:12vh;
                height: 1.95em;
                border: none;
                padding-left: 1em;
                outline: none;
                align-items: center;

            }
            ::placeholder{
                color:#113946;
                font-size: 0.8rem;
                font-weight: 100;
                font-family:Cursive;
                /* overflow: hidden; */
        }
        }
    }
    
}


`;


export default MainContainer;