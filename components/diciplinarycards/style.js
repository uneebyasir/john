import React from 'react'

export default () => (
    <style jsx="true">{`
        .discplin-card-img{
          background-image:url(/static/media/default-placeholder-1024x1024.png);
          min-height:636px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .discplin-main-conainer{
          padding-top: 38px;
        }
        .discpln-name{
          color: #110F10;
          font-size: 28px;
          line-height: 42px;
          padding-top:30px
        }
        .discpln-post{
          color: #C7C9D1;
          font-size: 24px;
          line-height: 36px;
        }
        .dis-main-heading p{
          color: #110F10;
          font-size: 42px;
          letter-spacing: 0.47px;
          line-height: 63px;
          font-weight: 500;
        }
        .dis-main-heading span{
          color: #C7C9D1;
          font-size: 20px;
          letter-spacing: 3.66px;
          line-height: 30px;
        }

        .dis-main-heading{
          padding: 160px 0px 38px 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
    `}</style>
)