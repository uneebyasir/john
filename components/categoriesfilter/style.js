import React from 'react';
export default () => (
    <style jsx="true">{`
        .categories-filter{
            padding-top: 120px;
        }
        .categories-filter h1{
            font-size: 88px;
            font-weight: 500;
            line-height: 120px;
            letter-spacing: normal;
            font-style: normal;
            color: #110F10;
            margin-bottom: 5px;
         }
        .categories-filter label,li {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 28px;
    color: #707177;
    padding-left: 5px;
}
       .categories-filter .categories-row li {
         color: #110F10;
    margin-bottom: 0px;
}
.categories-filter .categories-row {
    display:flex
}
.categories-filter .categories-row ul{
        display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    text-align: center;
    padding-left: 0px;
}
.categories-filter .categories-row ul .active{
    border-bottom: 2px solid black;
}
.categories-filter .categories-row ul li{
    cursor: pointer;
}
    `}</style>
)
