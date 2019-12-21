import React from 'react'

export default () => (
    <style jsx="true">{`

.treatment-first-section{
 min-height:676px;
 background-image:url('/static/media/treamtment-head.png');
 background-size:cover;
 background-repeat:no-repeat;
 margin-top:150px;
}


.treatment-first-section .main-col{
 display:flex;
}
.treatment-first-section .main-col h1{
 font-size:60px;
 font-weight: normal;
 line-height: 1.42;
 color: #253d5f;
}
.treatment-first-section .main-col p{
  font-size: 22px;
  line-height: 1.45;
  color: #4a505e;
  font-weight: normal;
  opacity: 0.63;
}
.treatment-first-section .main-col p span{
 font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #253d5f;
}
.treatment-first-section .content-div-col{
 display:flex;
 justify-content:flex-end;
}
.treatment-first-section .content-div{
 width: 524px;
}
.anim-main-div{
 position:relative
}
.anim-image-1{
 width: 500px;
 position: absolute;
 top: 150px;
 left: 89px;
 z-index: 2;

}
.anim-image-2{
 width:443px
}
.anim-image-3{
 width:338px;
 margin-top: 100px;

}
.first-section-sign{
display:flex;
align-items:center;
}
.sign-btn{
  color: #ffffff;
  font-weight: 500;
  font-size: 17px;
width: 200px;
  height: 50px;
  border-radius: 3px;
  box-shadow: 0 5px 15px 0 rgba(100, 110, 121, 0.3);
  background-image: linear-gradient(256deg, #bf6cff, #9041ff);
}
.sign-btn:hover{
color:white
}
.first-section-sign p{
margin-bottom:0;
font-size:14px!important;
padding-left:12px
}
.first-section-sign img{
padding-left:12px
}
.first-section-sign{
padding:30px 0px
}
.goto-link{
display:flex;
align-items:center
}

    `}</style>
)