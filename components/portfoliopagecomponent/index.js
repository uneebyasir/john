import React from "react";
import Pcards from "../portfoliocards"

const PortfolioMain=(props)=> {
    let {data} = props;
    return(
          <Pcards data={data}/>
    )
};
export default PortfolioMain