import React from 'react';
export default () => (
    <style jsx="true">{`
.meraContainer .row .col-md-4 {
  width: 31%;
}
.whyCard {
    border-radius: 8px;
    border: 2px solid #eee;
    margin: 0 10px;
    max-height: 325px;
}
.whyInner{
  margin: 50px 20px 50px 20px;
  padding: 5px 5px 5px 5px;
}
.whyIcon{
width: 35px;
}
.whysubHeading{
  color: #110F10;
  margin-top: 40px;
  margin-bottom: 25px;
  font-weight: 300;
  min-height: 66px;
}
.whyDescription{
  font-size: 16px;
  width: 271px;
  line-height: 1.5;
  color: #bbb;
}
.why-card-container{
    display: flex;
    justify-content: space-evenly
}
.emptyFormDiv {
  width: 100%;
  height: 150px;
}


#innovationPage .gallery-row{
  height: 455px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  -webkit-perspective: 1000;
  perspective: 1000;
}
#innovationPage .item-one{
  transform: translate3d(-580px, 0px, -373px);
  z-index: 0;
}
#innovationPage .item-two{
  transform: translate3d(-270px, 0px, -173px);
  z-index: 1;
}

 #innovationPage .item-three{
  color: #fff;
  background: #000!important;
  box-shadow: 0 0 15px #2b28288c;
  border: none;
  z-index: 2;
}

#innovationPage .item-four{
  transform: translate3d(275px, 0px, -173px);
  z-index: 1;
}
 #innovationPage .item-five{
  transform: translate3d(600px, 0px, -373px);
  z-index: 0;
}
 #innovationPage .advSubHeading{
  color: #110F10;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 300;
}
#innovationPage .item-three .advDescription,#innovationPage .item-three .advSubHeading{
  color: #fff;
}
#innovationPage .advDescription{
  font-size: 16px;
  line-height: 1.5;
  color: #bbb;
}
 #innovationPage .advCard  {
  border: 2px solid #eee;
  background: #fff;
  box-shadow: 4px 4px 4px #eee;
  margin: 0 10px;
  padding: 40px 40px 40px 40px;
  width: 23%;
  position: absolute;
}
#innovationPage .cardContent1{
  padding-left:27px;
}
.emptyFormDiv {
  width: 100%;
  height: 150px;
}
    `}</style>
);