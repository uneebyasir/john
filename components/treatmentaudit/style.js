import React from 'react'

export default () => (
    <style jsx="true">{`
.audit-section{
  height: 1102px;
  margin-top:100px;
  background-image: linear-gradient(300deg, #902afc, #3498f6);
}
.audit-section .heading-col{
padding:80px 0px;
}
.audit-section .heading-col h1{
 font-size: 48px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

}
.audit-img{
background-image:url('/static/media/audit-img.png');
    min-height: 820px;
    background-size:cover
}
.d-f{
display:flex;
}
.audit-list-side p{
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  color: #ffffff;
}
.audit-list-side{
    margin-top: 80px;
    width: 90%;
}
.audit-list-col{
display:flex;
justify-content:flex-end;
}
.audit-list-side ul li{
list-style:none;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.89;
  letter-spacing: normal;
  color: #ffffff;
}
.audit-list-side ul{
padding-left:0;
margin-top:100px;
margin-right:100px
}
.audit-list-side ul li:first-child{
  font-size: 24px;
  font-weight: bold;
}
.audit-btn{
 width: 334px;
  height: 50px;
  border-radius: 3px;
  border: solid 1px #dbdbdb;
  background-color: #ffffff;
    font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.24;
  letter-spacing: normal;
  color: #020202;
  margin-top: 40px;
}
    `}</style>
)