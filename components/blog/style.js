import React from 'react';
export default () => (
    <style jsx="true">{`
.blogContainer{
  margin-top: 60px;
}
.blogTitle{
  text-align: center;
}
.blogTitle h4{
  color: #A5A5A5;
  font-weight: normal;
  font-size: 18px;
}
.blogHead{
  font-size: 48px;
  margin: 0;
  font-weight: 300;
  color: #110F10;
}
.blogContainer .container{
  margin-top: 100px;
}
.blogContainer .container .col-md-4{
  width:31%;
  padding: 30px;
}
.onHoverDiv{
  cursor: pointer;
}
.hoverDiv{
  opacity:0;
}

.onHoverDiv:hover .hoverDiv{
  opacity: 1;
  animation: fade 0.4s ease-out;
}
.whyCard{
  border-radius: 8px;
  border: 2px solid #eee;
  margin: 0 10px;
  height: 455px;
}
.blogCard{
  height: 395px;
}
.blogPostHead{
  font-size: 20px;
  margin-bottom: 16px;
  color: #fff;
  font-weight: normal;
}
.blackPost{
  background: #313131;
  color: #fff;
  position: absolute;
  top: -3px;
  left: -13px;
  padding: 36px;
  right: -13px;
}
.blackPost h4{
  color: #fff;
  font-size: 17px;
  font-weight: normal;
}
.blackPost h1{
  color: #fff;
  font-size: 24px;
  font-weight: normal;
}
.postHeading{
  margin-top: 50px;
}
.postArrow{
  padding-top:100px;
}
.postAvatarCon{
  display: flex;
  align-items: center;
}
.postAvatar{
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background: #bbb;
  margin-right: 15px;
}
.blogPostTitleCon{
  margin: 10px 0;
  font-size: 20px;
  color: #233D63;
  font-weight: normal;
}
.blogPostDate{
  font-size: 16px;
  color: #838B98;
  font-weight: normal;
}

  .blogPostSubTitle{
  line-height: 28px;
  font-size: 17px;
  margin-top: 22px;
  font-weight: normal;
  color: #57667E;
}
.blog-main-container{
    display: flex;
    justify-content: space-evenly
}
    `}</style>
);