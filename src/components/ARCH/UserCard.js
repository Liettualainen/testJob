
import { useState } from 'react';
import  shadowpicture  from '../images/shadowpicture.png';

import {
    UseCardActive, UseCardImage, Tweets, Followers, UseCardImageStyle,
    UserCardBackImage, DecoratingImage} from './User.styled'; 

export const UserCard = ({ id, avatar, tweets, followers,}) => {

    
    const [active, setActive] = useState(false);

  const togle = (id) => {
      setActive(!active);    
       localStorage.setItem('active ', active );
      console.log(active); 
  };



    return (
       <UserCardBackImage>  <div className="user-card" data-id={id}>
            <DecoratingImage>
                <img src={shadowpicture} alt='sdds' />
          
            </DecoratingImage>
            <UseCardImage> <UseCardImageStyle img src={avatar}
                    alt="User avatar" ></UseCardImageStyle></UseCardImage>
               
                <Tweets>
                    {tweets} TWEETS
            </Tweets>
                <Followers>                    
                        {!active ? followers : followers + 1} FOLLOWERS
            </Followers>

            <UseCardActive isActive={active} button onClick={() => togle(id)} >{!active ? 'FOLLOW' : 'FOLLOWING'}
             </UseCardActive>
            
            </div>
       </UserCardBackImage>
      
        );
  };