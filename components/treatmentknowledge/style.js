import React from 'react'

export default () => (
    <style jsx="true">{`

.treat-knowledge-section .heading-col{
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction: column;
}

.treat-knowledge-section .heading-col h1{
font-size: 48px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #244574;
}
.treat-knowledge-section .heading-col p{
 font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.94;
  letter-spacing: normal;
  text-align: center;
  color: #4e4e4e;
}
.treat-knowledge-section .heading-col p span{
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #4a505e;
}
.treat-knowledge-section{
 padding: 120px 0px;
}

.treat-knowledge-section .cards-col .cards-div{
 display:flex;
 justify-content:space-between;
 flex-wrap:wrap
}

.knowledge-card{
        min-height: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
     border-radius: 5px;
  box-shadow: 0 25px 50px 0 rgba(78, 81, 144, 0.07);
  background-color: #ffffff;
      padding: 10px 20px;
      margin: 25px 0px;

}
.knowledge-card p{
 font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.94;
  letter-spacing: normal;
  text-align: center;
  color: #4e4e4e;
      padding-top: 30px;
}
    `}</style>
)