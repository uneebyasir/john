import React from 'react';
export default () => (
    <style jsx="true">{`
    .container-fluid{
    padding: 0px;
    margin: 0px auto;
    }
    .product-header{
    padding-top: 200px;
    }
    .product-header .catogory hr {
   height: 1px;
   width: 33px;
   background-color: #C7C9D1;
   margin-right: 7px;
   margin-left: 0;
   margin-top: 16px;
}
.title{
color: #110F10;
    font-family: Roboto;
        padding-left: 40px;
    padding-left: 40px;
    font-size: 50px;
    width: 80%;
    font-weight: bold;
    line-height: 88px;
    margin-top: 0;
}
.inner-info2{
    padding-left: 40px;
}
.client-info{
padding-left: 40px;
}
.client-info .inner-info p:first-child{
    width: 30%;
    color: #C7C9D1;
    font-size: 20px;
    letter-spacing: 3.66px;
    line-height: 30px;
}
.client-info .inner-info p:nth-child(2), .website-link p{
    color: #110F10;
    font-family: Roboto;
    font-size: 26px;
    letter-spacing: 1.64px;
    line-height: 38px;
}
.website-link{
    align-items: flex-end;
}
.website-link span{
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    margin-bottom: 14px;
    margin-left: 10px;
    padding: 12px 16px;
}
.custom-row a{
    text-decoration: none;
}
.website-link span:hover{
    cursor: pointer
}

.product-header .catogory p {
   color: #C7C9D1;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 4.3px;
    line-height: 36px;
}
     .d-flex{
    display:flex
    }
     .custom-row{
    display: flex;
    flex-wrap: wrap;
    }
    .header-image-background{
            background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 833px;
    }
    .header-image-background-container{
            padding-top: 20px;
    padding-bottom: 20px;
    }

    `}</style>
)
