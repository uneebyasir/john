import React from 'react'

export default () => (
    <style jsx="true">{`
.footer{
  background-image: url(/static/media/globe_Animation.svg);
  background-repeat: no-repeat;
  background-size: 4337px;
  background-position-x: 50%;
}
.emptyFooterDiv{
  width: 100%;
  height: 100px;
}
.footerHeading{
  font-size: 100px;
  font-weight: bold;
  width: 76%;
  line-height: 120px;
  letter-spacing: normal;
  font-style: normal;
  color: #110F10;
}
.footerContactDesc{
  font-size: 24px;
  line-height: 62px;
  font-weight: normal;
  color: #110F10;
}
.footerContactBox{
  margin-top: 30px;
}
.footerContactBox .footerContactHead{
  color: #63646A;
  font-size: 20px;
  line-height: 36px;
  font-weight: normal;
}
.footerContactDesc a{
  color: black;
  text-decoration: underline;
  margin: 0 8px;
}
.footerContactDesc a:hover{
  color:blue;
}
.privacy-link a{
    color: #110F10;
    text-decoration: none;
    padding: 40px 20px 0px 20px;
    font-size: 14px;
    font-weight: 700;
}
.privacy-link a:hover{
    color: #c14343;
}
    `}</style>
)