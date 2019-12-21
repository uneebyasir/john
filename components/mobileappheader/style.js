import React from 'react';
export default () => (
    <style jsx="true">{`
.mobile-header-background{
background-image:url('/static/media/mobile-header.png');
background-size:cover;
min-height: 760px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.mobile-header-background p{
color: #DCDEE7;
font-size: 24px;
letter-spacing: 4.3px;
line-height: 36px;
margin:0;
}
.mobile-header-background h1{
color: #FFFFFF;
font-size: 61px;
letter-spacing: 0.65px;
line-height: 77px;
margin:0;
}
.mobile-header-background >div{
padding-bottom:200px;
}
    `}</style>
);