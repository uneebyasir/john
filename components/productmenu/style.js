import React from "react";

export default () => (
    <style jsx="true">{`
        .main_sticky_section{
          position: sticky!important;
          position: -webkit-sticky!important;
          top: 96px;
          z-index: 12;
        }
        .leftMenuItems{
            position: absolute;
            left: 16px;
            top: 85px;
            list-style: none;
        }
        .leftMenuItems li:first-child{
            padding-top: 20px;
        }
        .leftMenuItems li:last-child{
            padding-bottom: 20px;
        }
        .leftMenuItems li{
            padding: 10px 0 10px 1.2em;
            position: relative;
            font-size: 19px;
            letter-spacing: 2.5px;
            font-weight: 600;
            text-transform: uppercase;
            border-left: 0.3px solid #e0e0e0;
            color: #cacaca;
            cursor: pointer;
        }
        .leftMenuItems li a{
            color: #a5a5a5;
            text-decoration: none;
        }
        .leftMenuItems li.active{
            border-left: 2px solid #565656;
        }
        .invertedNumber{
            color: black;
           left: 34px;
           position: absolute;
           transform: rotate(-90deg);
           font-size: 14px;
           background: rgba(256,256,256,.8);
           padding: 20px;
        }
        .invertedNumber p{
            color: #a5a5a5;
        }
        .sticky{
            padding-top: 200px!important;
            position: relative;
            z-index: 2;
        }
    `}</style>
)