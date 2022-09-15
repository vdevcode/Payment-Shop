import React from "react";
import Home from "../component/mainpage/Home";
import FlashDeals from "../component/flashDeals/FlashDeals";

const Pages = ({productItems})=>{
    return(
        <>
            <Home/>
            <FlashDeals productItems={productItems}/>
        </>
    )
}

export default Pages
