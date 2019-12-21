import React from 'react'

export default () => (
    <style jsx="true">{`
.founder-img-card{
background-color: #D8D8D8;
min-height: 600px;
}
.founder-1-main-cards{
display:flex;
justify-content:space-between;
padding-top: 100px;
}
.founder-name{
color: #110F10;		font-size: 30px;	letter-spacing: 0.34px;	line-height: 44px;
}
.founder-detail{
color: #110F10;		font-size: 18px;	line-height: 30px;
    padding-top: 30px;
}
.foundersmallname hr{
    height: 2px;
    margin-top: 8px;
    margin-left: 0;
    width: 23px;
    border-radius: 1.5px;
    margin-right: 9px;
    background-color: #666666;
}

.foundersmallname p{
color: #C7C9D1;	font-family: Roboto;	font-size: 16px;	letter-spacing: 1px;	line-height: 19px;
}
.foundersmallname{
display: flex;
    justify-content: flex-start;
        padding-top: 16px;
}
.founder-signatue{
height: 63px;
}


    `}</style>
)