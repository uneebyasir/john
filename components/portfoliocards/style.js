import React from 'react'

export default () => (
    <style jsx="true">{`
               .portfolio-container{
          min-height:400px;
          padding-top:100px;

        }
        .portfolio-row{
          flex-wrap:wrap;
        }
        .portfolio-first-col{
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 50px;
        }
        .portfolio-first-col p:first-child{
          color: #C7C9D1;
          font-family: Roboto Light;
          font-size: 18px;
          letter-spacing: 1.06px;
          line-height: 21px;
          text-align: center;
        }
        .portfolio-first-col p:nth-child(2){
          color: #110F10;
          font-family: Roboto;
          font-size: 42px;
          font-weight: bold;
          line-height: 55px;
          text-align: center;
          margin-bottom:80px;
        }

.portfoliocard {
    border-radius: 5px;
    min-height: 465px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
    transition: background-color 0.2s;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
        .portfoliocard:hover .hoverCard {
            opacity: 1;
    animation: fade 0.4s ease-out;
    cursor: pointer;
        }
        .hoverCard{
        opacity: 0;
        }
        .portfoliocard p{
          color: #FFFFFF;
          font-family: Roboto;
          font-size: 18px;
          line-height: 22px;
          padding: 10px 22px;
        }
        .portfoliocard p span{
          font-size:12px;
        }
        .portfolio-card-main{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .portfolio-card-main a{
          text-decoration: none;
        }
        .portfolio-card-main a:hover .portfoliocard{
          background-color: #676767;
        }
.portfolio-bg {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 350px;
}
        .Portfolio-detail{
        position: absolute;
        left: 0;
        right:0;
        top: 0;
        bottom: 0;
        }
        .Portfolio-detail h2{
    font-size: 24px;
    color: white;
    padding-bottom: 15px;

        }
        .Portfolio-detail h5{
            color: white;
    font-size: 17px;
    padding-bottom: 15px;
        }
        .position-caseSt{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 20px;
            background-color: rgba(72, 72, 72, 0.91);
            border-radius: 5px;
        }
    `}</style>
)