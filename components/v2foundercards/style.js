import React from 'react'

export default () => (
    <style jsx="true">{`
// .long-card{
// float:right;
// }
.round-div-londcard{
height: 162px;	width: 162px;	background-color: #D8D8D8;
    border-radius: 50%;
    background-size: contain;
}
.founder-name{
color: #110F10;font-size: 30px;	letter-spacing: 0.34px;	line-height: 44px;
}
.founder-detail{
color: #110F10;	font-family: Roboto;	font-size: 18px;	line-height: 30px;
}

.long-card .row{
display:flex;
justify-content:space-between;
margin-bottom:100px;
    }
.long-card-main{
  padding-top: 100px;
    }
    .long-line-div hr{
width: 23px;
    height: 2px;
    background-color: #666666;
    margin-right: 8px;
    margin-top: 7px;
    margin-left: 0;
}
 .long-line-div{
display:flex;
    padding-top: 25px
 }
 .founder-detail-div img{
    width: 34px;
 }
    `}</style>
)