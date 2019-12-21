import React from 'react';
export default () => (
    <style jsx="true">{`
  .web-app-header{
     min-height: 900px;
    background-image: url(/static/media/office-932926_1920.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
.web-app-header-overlay{
       background: #00000096;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}
.web-app-line{
  display: flex;
  align-items: center;
      z-index: 1;
      padding-bottom: 80px;
}
.web-app-line hr{

    background-color: white;
    width: 200px;
    height: 1px;
    margin-left: 80px;
    margin-right: 33px;
}
.web-app-line h4{
color:white;
font-size:30px;
font-weight:100;
line-height: 1.8;
max-width: 550px;
}
    `}</style>
)
