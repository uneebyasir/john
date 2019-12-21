import React from 'react';
export default () => (
    <style jsx="true">{`
.main_header {
    position: relative;
}
.top-header {
    padding-top: 50px;
}
.head-bgImg{
  background-image: url(/static/media/headBg.svg);
}
.position .col-md-12{
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
}
.main-heading-container{
  display: flex;
  justify-content: left;
  flex-direction: column;
  text-align: left;
  padding-top: 100px;
  z-index: 1;
  margin: 0 auto;
  position: relative;
}
.headerBtn{
  // background-color: #dd4452;
  border: 2px solid #110F10;
  color: #110F10;
  padding: 19px 40px;
  text-align: center;
  font-weight: bold;
  width: 50%;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 0.31px;
  line-height: 21px;
  font-size: 18px;
  margin-top: 30px;
  background-image: linear-gradient(to left,
    transparent,
    transparent 50%,
    #2f2f2f 50%,
    #2f2f2f);
  background-position: 100% 0;
    background-size: 200% 100%;
    transition: all .21s ease-out;
}
.headerBtn:hover {
background-position: 0 0;
color: white;
}
.heading-upper h1{
  font-family: Roboto, sans-serif;
  font-weight: 700;
  margin: 0;
  line-height: 78px;
  color: #110F10;
  font-size: 5em;
  letter-spacing: normal;
  font-style: normal;
  margin-bottom: 20px;
}
.heading-upper p, .heading-upper div{
  font-family: Roboto, sans-serif;
  font-size: 29px;
  font-weight: 300;
  letter-spacing: 0.31px;
  margin-bottom: 35px;
  line-height: 34px;
  color: #110F10;
}
.other .heading-upper p, .other .heading-upper div{
    font-size: 22px;
}
.alpha-squad-img{
  padding-top: 138px;
}
.alpha-squad-img img{
    width: 100%;
    padding-left: 44px;
}
.position{
position: relative;
}
.reactangle-svg{
position: absolute;
    z-index: -1;
    bottom: -115px;
    left: 0;
    right: 0;
}
.reactangle-svg object{
    width: 100%;
}
.scene{
    background: transparent;
    position: absolute;
    bottom: -94px;
    right: 0;
    width: 100%;
    pointer-events: none;
    z-index: 2;
    }

    .headerLine{
      position: absolute;
      top:17px;
      left: 6px;
      height: 0.76px;
      width: 37.82px;
      background-color: #C7C9D1;
    }
    .productDevelopment{
      color: #C7C9D1;
      font-family: Roboto;
      font-size: 24px;
      font-weight: 300;
      letter-spacing: 4.3px;
      line-height: 36px;
    }
    .headItemline{
        position: relative;
        padding-left: 52px;
    }
    `}</style>
);