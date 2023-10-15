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

height:98vh;
width:90vw;
position:relative;
left:8em;

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
    background-color: lightgoldenrodyellow;
}
.rbc-row-segment{
    /* overflow: scroll; */
    scroll-behavior: smooth;
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
`;

export default Wrapper
