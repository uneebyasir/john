import React from 'react';
export default () => (
    <style jsx="true">{`
    .post-cards .d-flex{
    display:flex
    }
    .post-cards .custom-row{
    display: flex;
    flex-wrap: wrap;
    }
    .post-cards .custom-row .col-md-6{
            padding: 25px;
    }
     .post-cards{
        padding-top: 40px;
    }
    .post-cards .post-card-background{
            background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 355px;
    }
    .post-cards .custom-row a{
        color: black;
        text-decoration: none;
    }
    .post-cards .custom-row a:hover{
        color: black;
    }

    .post-cards hr {
   height: 2px;
   width: 38px;
   background-color: #C7C9D1;
   margin-right: 7px;
   margin-left: 0;
   margin-top: 16px;
}

.post-cards p,span {
   color: #8c8c90;
   font-size: 24px;
   letter-spacing: 4.3px;
   line-height: 36px;
}

.post-cards .post-card-detail{
    padding-top: 30px;
}
.post-cards .post-card-detail h3{
        margin: 0px;
    padding-left: 42px;
    line-height: 1.6;
    margin-bottom: 60px;
}
.post-cards .show-more-btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
.post-cards .show-more-btn button{
        background-color: transparent;
    border: 3px solid black;
    padding: 10px 60px 10px 60px;
    font-size: 16px;
    font-weight: 600;
}
    `}</style>
)
