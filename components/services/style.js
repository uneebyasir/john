import React from 'react';
export default () => (
    <style jsx="true">{`
.serviceSection{
  background-image: url(/static/media/bgshape.svg);
  background-repeat: no-repeat;
  padding-top: 72px;
}
.serviceSection .serviceHeader{
  text-align: center;
  padding-bottom: 50px;
}
.serviceSection .serviceHeader p{
  color: #A5A5A5;
  font-size: 18px;
  font-weight: 300;
}
.serviceSection .serviceHeader h1{
  font-size: 48px;
  font-weight: 300;
  color: #110F10;
}
.serviceSlider{
  margin-left: 20px;
}
#overheadPage .svg-background {
height: 57px;
}
.serviceHead{
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 30px;
  font-weight: 300;
  color: #27292B;
}
.serviceText{
  min-height: 70px;
  font-size: 16px;
  margin-bottom: 20px;
  color: #6C7787;
  font-weight: 300;
}
.serviceMore{
  display: flex;
  align-items: center;
}
.serviceMore h6{
  font-weight: 500;
  color: #110F10;
  font-size: 12px;
}
.serviceIcon{
  background: black;
  margin-left: 15px;
  width: 13.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 0;
  border-radius: 50px;
  margin-bottom: 7px;
}
.emptyDiv{
  width: 100%;
  height:113px;
}
.emptyFormDiv {
    width: 100%;
    height: 150px;
}
    `}</style>
);