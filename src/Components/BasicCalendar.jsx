import React,{useEffect, useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import Wrapper from '../Styles/CalendarStyle';

const localizer = momentLocalizer(moment) 
const siteImageMap = {
  'LeetCode': 'https://leetcode.com/static/images/LeetCode_Sharing.png',
  'CodeChef': 'https://s3.amazonaws.com/codechef_shared/misc/fb-image-icon.png',
  'CodeForces': 'https://cdn.iconscout.com/icon/free/png-512/free-code-forces-3629285-3031869.png?f=avif&w=256',
  'CodeForces::Gym':'https://cdn.iconscout.com/icon/free/png-512/free-code-forces-3629285-3031869.png?f=avif&w=256',
  'HackerEarth': 'https://cdn.icon-icons.com/icons2/2389/PNG/512/hackerearth_logo_icon_145208.png',
  'HackerRank': 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png',
  'Kick Start': 'https://storage.googleapis.com/coding-competitions.appspot.com/HC-logo.svg',
  'AtCoder': 'https://img.atcoder.jp/icons/ba30517b93df48ab55030421dd622ad3.png',
  'TopCoder': 'https://www.topcoder.com/wp-content/uploads/2020/12/Topcoder_Logo_2020.svg',
  'Toph': 'https://toph.co/favicon.ico',
 
  
};

function BasicCalendar() {
    const [cpost,setpost] = useState([])
    useEffect (()=>{
      axios
      .get('https://kontests.net/api/v1/all')
      .then((res)=>{
          console.log(res.data);
         setpost(res.data)
  
        })
        .catch((err)=>
        {
          console.log(err);
        })
  
    },[])
   

    const events = cpost.map((item, index) => {
      const siteImage = siteImageMap[item.site] || ''; 
      return {
        id: index,
        start: moment(item.start_time).toDate(),
        end: moment(item.end_time).toDate(),
        title: (
          <a href={item.url} rel="noreferrer" target='_blank'>
            <img width={30} src={siteImage}  alt='Logo'/>
            {item.site} - {item.name}
          </a>
        ),
      };
    });
    
  // const eventColorGetter = () => {
  //   const red = Math.floor(Math.random() * 256);
  //   const green = Math.floor(Math.random() * 256);
  //   const blue = Math.floor(Math.random() * 256);
  //   const backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  //   const brightness = (299 * red + 587 * green + 114 * blue) / 1000;
  //   const textColor = brightness > 128 ? "black" : "white";
  //   return {
  //     style: {
  //       backgroundColor: backgroundColor,
  //       color: textColor,
  //     },
  //   };
  // };
   

  return (
    <div>
    <Wrapper>
     <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        // eventPropGetter={eventColorGetter}
 
        />
        
    </Wrapper>
    </div>
  )
}

export default BasicCalendar