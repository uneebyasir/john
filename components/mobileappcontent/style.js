import React from 'react';
export default () => (
    <style jsx="true">{`
.mobile-content .col-md-6 h5{
color: #110F10;
font-size: 42px;
letter-spacing: 0.47px;
line-height: 63px;
}
.mobile-content .col-md-6 h6{
    color: #63646A;
    font-size: 26px;
    line-height: 50px;
    }
.mobile-content .col-md-6 p{
color: #63646A;
font-size: 26px;
line-height: 50px;
}
.mobile-content{
padding-top:100px
}
.mobile-app-pic{
background-image: url(/static/media/mobile-media.png);
min-height: 600px;
background-repeat: no-repeat;
background-size: cover;
}
.mobile-content .col-md-12 .row{
justify-content:space-between;
}
    `}</style>
)
