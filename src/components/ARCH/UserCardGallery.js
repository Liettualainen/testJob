// import { React, Component } from "react";
// import { getUsers, recordsPerPage } from "MockapiAPI";
import { UserCard } from "./UserCard";

import { useEffect, useState } from 'react';
import { getUsers,  usersCount, recordsPerPage } from '../MockapiAPI';

import Loader from './Loader';
import ButtonLoadMore from './ButtonLoadMore';

import { Layout} from './User.styled'; 

const UserCardGallery = () => {
    const [page, setPage] = useState(0);
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(false);
    const [disabled, setdDisabled] = useState(false);
    // const [active, setActive] = useState(false);


    useEffect(() => {
        // setUsers([]);
    setPage(1);
    }, []);
  
    useEffect(() => {
      
      async function fetchData() {
       setLoader(true);
        try {          
            const response = await getUsers(page);
            const usersData = await response.json();
            console.log(usersData);
          setUsers(prev => [...prev, ...usersData]);     
            // setUsers([...usersData]); 
      } catch (err) {
            console.log(err.message);
        }
        finally {
        setLoader(false);
      }
    }
    fetchData();
    }, [page]);
    
  const handleButtonClick = () => {
       setPage(prev => prev + 1);
           if (users.length >= usersCount-recordsPerPage) {
            setdDisabled(true);
            return;
        }
       
    };
    
    
//   const togleFollowers = (id) => {
//       setActive(!active);
//       console.log(active);
//       return;      
    
//   };

    
     return (
    < > 
             <Layout>
                 
        {users.map(({ id, avatar, tweets, followers }) => {
            return (
                <UserCard
                    key={id}
                    data-id={id}
                    avatar={avatar}
                    tweets={tweets}
                    followers={followers}
                //   togle={togleFollowers}
              />
              
          )
        })}
     </Layout>

        <Loader
           isVisible = {loader}
         />
             {users.length > 0 && <ButtonLoadMore disabled={disabled} onClick={handleButtonClick} />}
    </>
  );


}

export default UserCardGallery;