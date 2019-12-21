import React from 'react';
export default () => (
    <style jsx="true">{`
.formCard{
  border: 1px solid #eee;
  padding: 5px;
  box-shadow: 1px 1px 7px #eee;
  border-radius: 5px;
}
.formPercentage{
  display: flex;
  align-items: center;
  width: 95%;
  padding: 17px 20px;
}
.formPercentageText{
  margin-left: 15px;
}
.formPercentageText h4{
  font-size: 19px;
  color: #57667E;
  font-weight: 400;
  line-height: 28px;
}
.formPercentageText p{
  font-size: 17px;
  color: #838B98;
}
.rightForm{
  padding: 35px;
  z-index: 1;
  position: absolute;
  bottom: -542px;
  background: #fff;
  border-radius: 0;
}
.rightForm .form-control{
  height: 50px;
  border-radius: 2px;
  font-size:16px;
}
.formDropdown{
  position: absolute;
  right: 33px;
  top: 17px;
}
.positionRow{
  margin-left:-15px;
  width: 229px !important;
}
.positionRow1{
  margin-right:-15px;
  width: 229px !important;
}
.largeArea .col-sm-12 .form-control{
  height: 140px;
  padding-top: 2px;
}
.formBtn{
  background-color: white;
  border: 2px solid black;
  color: black;
  padding: 16px 16px;
  text-align: center;
  font-weight: 700;
  width: 100%;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 30px;
  background-image: linear-gradient(to left, transparent, transparent 50%, #2f2f2f 50%, #2f2f2f);
    background-position: 100% 0;
    background-size: 200% 100%;
    transition: all .21s ease-out;
}
.formBtn:hover {
    background-position: 0 0;
    color: white;
}
.largeBgPadding{
  padding: 0 !important;
}
.bg-animation {
  -webkit-animation: bg-animation 25s ease-in-out infinite;
  animation: bg-animation 25s ease-in-out infinite;
  height: 100%;
}
.header-blog {
  background-image: url(/static/media/bgg.jpg);
  z-index: -1;
}
.header-blog {
  height: 60vh;
  margin-top:70px;
  background-size: cover;
  background-repeat: no-repeat;
}
.header-blog .container {
  position: relative;
  height: 100%;
}
.header-row h1.title {
  color: #fff;
  padding-top: 24px;
}
.formSquareCon{
  display: flex;
  flex-wrap: wrap;
}
.infoBox{
  padding: 22px 11px;
    border: 1px solid #6f6f6f;
    color: #fff;
    margin-bottom: 24px;
    min-width: 238px;
}
.infoBoxHead{
  font-size: 35px;
  font-weight: 700;
  margin: 3px;
}
.infoBoxDesc{
  font-size: 25px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 200;
}
.flex-form{
 display: flex;
    align-items: center;
}
.emptyFormDiv {
  width: 100%;
  height: 150px;
}
    `}</style>
);