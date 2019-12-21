import React from 'react'

export default () => (
    <style jsx="true">{`
    .v2-img-header{
        background-image: url(/static/media/about-head-bg.jpg);
        min-height: 820px;
        background-repeat: no-repeat;
        display: flex;
        background-size: cover;
        justify-content: flex-end;
        flex-direction: column;
    }
    .v2-img-container{
        padding:0!important;
    }
    .v2-img-header h1{
        color: #FFFFFF;
        font-size: 50px;
        letter-spacing: 0.65px;
        padding-bottom: 250px;
    }
    `}</style>
)