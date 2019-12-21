import React from 'react'

export default () => (
    <style jsx="true">{`
.guess-div h1{
  font-size: 48px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: normal;
  color: #3e3e3e;
}
.guess-div  p{
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.72;
  letter-spacing: normal;
  color: #848991;

}
.sign-btn-2{
    color: #ffffff;
    font-weight: 500;
    font-size: 17px;
     width: 387px;
  height: 50px;
    border-radius: 3px;
    box-shadow: 0 5px 15px 0 rgba(100, 110, 121, 0.3);
    background-image: linear-gradient(256deg, #bf6cff, #9041ff);

}
.sign-btn-2 a {
color:white!important;
}
.sign-btn-2 a:hover{
    text-decoration: none;
}
.sign-btn-2:hover{
color:white
}
.dec-svg {
background-image:url('/static/media/decision-main.svg');
       background-size: 100% 100%;
    background-repeat:no-repeat;
}

    `}</style>
)