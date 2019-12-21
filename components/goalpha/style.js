import React from 'react';
export default () => (
    <style jsx="true">{`
.sectionWhy{
  overflow-y: hidden;
      padding-top: 132px;
}
.whyHead{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.whyInner object{
   height: 61px;
}
.whyHeading{
  letter-spacing: 2px;
  color: #A5A5A5;
  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
}
.slide{
    padding: 0;
    pointer-events: unset;
}
@media (min-width: 1366px){
    .carousel-item{
        height: 553px;
    }
}
.whySubHead{
font-size: 48px;
    width: 50%;
    color: #110F10;
    line-height: 56px;
    text-align: center;
    font-weight: 300;
    margin: 0 auto;
}
.meraContainer{
  margin-top: 71px;
}
.meraContainer .row .col-md-4 {
  width: 31%;
}
.whyInner{
  margin: 50px 0 50px 20px;
}
.whysubHeading{
    color: #110F10;
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: 300;
    min-height: 66px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
.carousel-control-prev{
    position: absolute;
    left: -115px;
}
.carousel-control-next{
    position: absolute;
    right: -115px;
}
.carousel-control-prev-icon{
background-image: url(/static/media/back.svg);
    margin-top: 70px;
}
.carousel-control-next-icon{
background-image: url(/static/media/back.svg);
    margin-top: 70px;
    transform: rotate(180deg);
}
    `}</style>
);