import React from "react";

export default () => (
    <style jsx="true">{`
        .toggleButton{
        display: none;
        }
        .navbar{
          z-index: 4;
          margin: 0 auto;
          margin-top: 20px;
          border-radius: 4px;
          box-shadow: none;
        }
        .navbar{
          position: fixed !important;
          top: 0px;
          width: 100vw !important;
          background: #fff;
          padding: 17px 0;
          margin: 0 -30px 0 0 !important;
          border-radius: 0 !important;
        }
        .navContainer{
          position: relative;
        }
        .logo{
          width:220px;
          margin-top:20px;
          transition: margin-top 0.4s, width 0.4s;
        }
        .pd-top{
          padding-top: 13px;
        }
        .main-nav {
          list-style: none;
        }
        .main-nav li a{
          padding-right: 40px !important;
          font-size: 12px;
          font-weight: 600;
          color: black;
          list-style: none;
        }
        a.navbar-brand:hover {
          background: transparent;
        }
        .navbar .container{
        display: block;
        }        .navbar.dark{
            background: transparent;
        }
        .navbar.dark .hamburger{
            background: transparent;
        }
        .navbar.dark .hamburger__line-in::after, .navbar.dark .hamburger:hover .hamburger__line-in::before, .navbar.dark .hamburger:hover .hamburger__line-in::after{
            background: #fff;
        }
        .navbar-nav{
    flex-direction: row;
        }
    .navbar-nav li{
        padding: 40px 16px;
        font-size: 14px;
        font-weight: 700;
        transition: padding 0.4s;
        }
        .navbar-nav li:last-child{
            padding-right:0;
        }
        .active-menu .navbar-nav li{
            padding: 18px 10px 14px 10px;
        }
        .active-menu{
            -webkit-box-shadow: 0px 7px 5px -10px rgba(0,0,0,0.45);
            -moz-box-shadow: 0px 7px 5px -10px rgba(0,0,0,0.45);
            box-shadow: 0px 7px 5px -10px rgba(0,0,0,0.45);
        }

        .active-menu .logo{
             margin-top:0;
             width: 190px;
        }
        .navbar-nav li a{
                color: #110F10;
                text-decoration: none;
        }
        .navbar-nav li a:hover, .navbar-nav li a.active{
                color: #c14343;
        }
        .toggle-pos{
        cursor:pointer;
        }
    `}</style>
)