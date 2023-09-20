import styled from "styled-components";

export const UseCardActive = styled.button`

 font-family: Montserrat;
 font-weight: 600;
font-size: 18px;
line-hight: 21.94px;
width:196px;
height: 50px;
border-radius: 10.31px;
padding: '14px, 28px, 14px, 28px';
gap: 6px;
background-color:
${p => {
         return (p.isActive) ? 'rgba(92, 211, 168, 1)' : 'rgba(235, 216, 255, 1)';
}};
`;


export const UseCardImage = styled.div`
display: flex;
justify-content: center;
width: 80px;

margin: auto;
// border: 10px solid grey;
//  border-radius: 50%;  
//  border-image: linear-gradient(to right top, blue, skyblue, blue);
//    border-image-slice: 1;


`;
export const UseCardImageStyle = styled.img`
border-radius: 85.92px;
 overflow: hidden;
`;


export const Tweets = styled.div`
display: flex;
  justify-content: center;
 font-family: Montserrat;
 font-weight: 500;
font-size: 20px;
line-hight: 24.38px;
margin-top: 26px;
margin-bottom: 16px;
color:rgba(235, 216, 255, 1) ;
`;

export const Followers = styled.div`
display: flex;
  justify-content: center;
 font-family: Montserrat;
 font-weight: 500;
font-size: 20px;
line-hight: 24.38px;
margin-bottom: 26px;
color:rgba(235, 216, 255, 1) ;
`;

export const UserCardBackImage = styled.div`
position: relative;
display: flex;
  justify-content: center;
  padding-top: 178px;
width:380px;
height 460px;
border-radius:  20.62px;
margin: 10px;


background-image: linear-gradient(rgba(71, 28, 169, 1),
rgba(87, 53, 163, 1),
rgba(87, 53, 163, 1),
rgba(87, 54, 163, 1),
rgba(87, 54, 163, 1),
rgba(75, 42, 153, 1),
rgba(75, 42, 153, 1)),             
     url("../../media/examples/lizard.png");

`;

export const DecoratingImage = styled.div`
position: absolute;
top: 28px;
left: 36px;

display: flex;
  justify-content: center;
width:308px;
height: 168px;
`;


export const Layout = styled.div`
display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;

`;