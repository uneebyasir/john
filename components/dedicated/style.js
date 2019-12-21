import React from 'react';
export default () => (
    <style jsx="true">{`
 #innovationPage .cardContent{
  color: #110F10;
  display: flex;
}
#innovationPage .cardContent p {
color: #6C7787;
}
 #innovationPage .card .headItemline{
  position: relative;
  margin-left: -8px;
  padding-right: 12px;
  background-color: #1c1d1f;
  border-radius: 2px;
  max-height: 98px;
}
.padd-center{
    padding: 32px 0px 32px 0px;
}
#innovationPage .card .productDevelopment {
    color: #C7C9D1;
    font-family: Roboto;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 36px;
    padding-left: 20px;
}
#overheadPage .cardContent h1, #innovationPage .cardContent h1{
font-size: 15px;
    font-weight: 500
}
#overheadPage .card, #innovationPage .card {
  box-shadow: 0 0px 12px 0 rgba(0,0,0,0.15);
  max-height: 100px;
  padding: 1px 1px 1px 10px;
  border-radius: 4px;
  margin-top: 25px;
  position: relative;
}

#overheadPage .card .productDevelopment, #innovationPage .card .productDevelopment{
  color: #C7C9D1;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 36px;
  padding-left: 20px;
}
#overheadPage .card .headerLine, #innovationPage .card .headerLine{
  position: absolute;
  bottom: 100%;
  left: 2px;
  top: 50%;
  height: 0.86px;
  width: 12.82px;
  background-color: #C7C9D1;
}
.transperancyImage{
width: 100%;
}
#innovationPage .cardContent1 {
    padding: 10px 10px 10px 27px;
    display: flex;
    align-items: center;
}
.cardContent2{
    padding: 10px 10px 10px 27px;
color: white;
}

.emptyFormDiv {
    width: 100%;
    height: 150px;
}
.hoverCard{
opacity: 0;
}

.overlayDisplay{
    position: absolute;
  max-height: 150px;
  padding: 1px 1px 1px 10px;
  border-radius: 4px;
  background-color: #1c1d1f;
   z-index: 1;
       top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
}
    `}</style>
);