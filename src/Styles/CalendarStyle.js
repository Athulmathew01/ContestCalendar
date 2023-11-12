import styled from "styled-components";

    // const red = Math.floor(Math.random() * 256);
    // const green = Math.floor(Math.random() * 256);
    // const blue = Math.floor(Math.random() * 256);
    // const backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    // const brightness = (299 * red + 587 * green + 114 * blue) / 1000;
    // const textColor = brightness > 128 ? "black" : "white";
    // // return {
    // style: {
    //     backgroundColor: backgroundColor,
    //     color: textColor,
    // },
    // };

const Wrapper = styled.div`
@media (max-width: 768px) {
  .rbc-calendar {
    height: 87vh;
    width: 90vw;
    margin: 0 auto;

  }
  /* .rbc-event,.rbc-event-allday{
    a{
        word-wrap: break-word;

    }
  } */
}

height:85vh;
width:87vw;
position:relative;
margin: 0 auto;
margin-top: 1.8em;

.rbc-event-content,.rbc-event{
    height: 30px;
    background-color: transparent;
    overflow: unset;
    a{
        display: flex;
        
        padding: 2px;
        margin: 2px;
        color: black;
        text-decoration: none;
        gap: 8px;
        /* border:1px solid black; */
        img{
            width: 25px;
            height: 25px;
            object-fit: cover;    
        }
    }

}
.rbc-day-bg.rbc-today{
    background-color: #FFF2D8;
}
.rbc-row-segment{
    /* overflow: scroll; */

    a{
        overflow-wrap: break-word;  
        word-wrap: break-word; 
        word-break: break-word;
    }
}


.rbc-agenda-event-cell{
    a{
        display: flex;
        text-align: center;
        justify-content:baseline;
        flex-wrap: wrap;
        padding:1px;
        margin: 2px;
        color: black;
        text-decoration: none;
        img{
            margin-right:5px;
        }
    }
}
@media screen and (max-width: 768px) {
    .rbc-event-content{
        a{
            overflow-x: scroll;
          
        }
        ::-webkit-scrollbar {
                width: auto;
                height: 3px;
                padding: 2px;
            }

        ::-webkit-scrollbar-thumb {
            background-color: #113946;
            border-radius: 10px;
        }

    }
    .rbc-row{
        margin-top: 0.3em;
    } 
    .rbc-toolbar{
        flex-direction: column-reverse;
        span{
            margin: 0.2em;
        }
    }
}
`;

export default Wrapper
