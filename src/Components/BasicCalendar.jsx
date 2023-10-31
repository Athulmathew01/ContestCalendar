import React,{useEffect, useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import Wrapper from '../Styles/CalendarStyle';
import { useSearch } from './Context';
import Loader from './Loader';



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
    const [loading, setLoading] = useState(true);
    const {search} = useSearch();


    useEffect (()=>{
      axios
      .get('https://kontests.net/api/v1/all')
      .then((res)=>{
        setpost(res.data)
        setTimeout(() => {
          setLoading(false);
        }, 2500);
  
        })
        .catch((err) => {
          console.error('Error fetching data:', err);
          setTimeout(() => {
            setLoading(false);
          }, 2500);
        });
  
    },[])

    const events = cpost.map((item, index) => {
      // logic for filtering the events
      if (item.site.toLowerCase().includes(search.toLowerCase())) {
        const siteImage = siteImageMap[item.site] || ''; 
        return {
          id: index,
          // Due to some Depriciation of the date time i changed the format of the date time
          start: moment(item.start_time).toDate(),
          end: moment(item.end_time).toDate(),
          // start:moment(item.start_time, 'YYYY-MM-DD HH:mm:ss z').toISOString(),
          // end: moment(item.end_time, 'YYYY-MM-DD HH:mm:ss z').toISOString(),
          title: (
            <a href={item.url} rel="noreferrer" target='_blank'>
              <img width={30} src={siteImage}  alt='Logo'/>
              {item.site} - {item.name}
            </a>
          ),
        };
      }    
      else if (search === ''){
        // if not typed anything every result is shown
        const siteImage = siteImageMap[item.site] || ''; 
        return {
          id: index,
          start: moment(item.start_time).toDate(),
          end: moment(item.end_time).toDate(),
          // start:moment(item.start_time, 'YYYY-MM-DD HH:mm:ss z').toISOString(),
          // end: moment(item.end_time, 'YYYY-MM-DD HH:mm:ss z').toISOString(),
          title: (
            <a href={item.url} rel="noreferrer" target='_blank'>
              <img width={30} src={siteImage}  alt='Logo'/>
              {item.site} - {item.name}
            </a>
          ),
        };
      }
  
      return null;
    });
    


  return (
    <div>
      {loading ? (
        <Loader/>
    ) : (
    <Wrapper>
     <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        />
        
    </Wrapper>
  )}
    </div>
  )
}

export default BasicCalendar