import React from 'react'

export default () => (
    <style jsx="true">{`
    .testimonial-section{
    margin: 150px 40px 0px 40px ;
    }
    .testimonaial-bg-svg{
    position: relative;
    width:100%;
    background-image: url(/static/media/testimonialBg.png);
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    min-height: 100%;
    }
    .AbsoluteSvg{
    position: absolute;
    top: 120px;
    bottom: 120px;
    left: 0;
    max-height: 350px;
    }
    .testimonial-txt .heading2{
    font-size: 48px;
    font-weight: 300;
    color: #110F10;
    padding-top: 30px;
    }
    .testimonial-txt .heading5{
    color: #A5A5A5;
    font-size: 18px;
    font-weight: 300;
    }
    .testimonial-txt .para{
    padding: 0 140px 30px 0px;
    font-size: 16px;
    line-height: 30px;
    color: #A5A5A5;
        min-height: 163px;
    }
    .aurthor{
    display: flex;
    flex-direction: row;
    }
    .aurthor-img{
    margin-bottom: 18px;
    min-width: 70px;
    min-height: 70px;
    border-radius: 50%;
    margin-right: 30px;
    background-size: cover;
    background-position: center;
    }
    .aurthor-img1{
    background-image: url(/static/media/Benjamin-Leher.jpeg);
    }
    .aurthor-img2{
    background-image: url(/static/media/Gene-Foo.png);
    }
    .aurthor-img3{
    background-image: url(/static/media/p-olson.jpeg);
    }
     .aurthor-img4{
    background-image: url(/static/media/dumy.png);
     }.aurthor-img5{
    background-image: url(/static/media/Florian-Felsing.jpg);
    }
     .aurthor-img6{
    background-image: url(/static/media/dumy.png);
    }
    .aurthor-img7{
    background-image: url(/static/media/Robert-Kanaat.jpeg);
    }
    .aurthor-img8{
    background-image: url(/static/media/Christopher-South.jpeg);
    }
    .aurthor-img9{
    background-image: url(/static/media/jens-jakob-andersen-sm.jpg);
    }
    .aurthor-img10{
    background-image: url(/static/media/Amir-Irani.png);
    }
    .bgImg-shape{
    background-image: url(/static/media/Bg-Shape.svg);
    background-repeat: no-repeat;
    background-position: center;
    min-height: 542px;
    }
    .arrowImages{
    display: flex;
    }
.nextIcon-aurthon{
margin-left: 15px;
}
.testimonial-section .carousel-control-prev{
    position: absolute;
    right: 186px;
    left: unset;
    top: 0;
    bottom: unset;
}
.testimonial-section .carousel-control-next{
    position: absolute;
    right: 146px;
    top: 0;
    bottom: unset;
}
.testimonial-section .carousel-control-prev-icon{
background-image: url(/static/media/back.svg);
    margin-top: 0px;
    width: 15px;
    position: absolute;
    top: 4px;
    bottom: unset;
}
.testimonial-section .carousel-control-next-icon{
background-image: url(/static/media/next.svg);
    margin-top: 0px;
    transform: none;
    width: 35px;
    position: absolute;
    top: 4px;
    bottom: unset;
}
    `}</style>
)