import React from "react";

const StakeCalculate = (props) => {
    let inflation = props.inflation;
    let bondedRatio = props.pool / props.supply;
    let annualProfit =  (((inflation*(1-0.02))/bondedRatio)*100).toFixed(2)
    return <div>
        Annual Profit: {annualProfit}%
    </div>
}

export default StakeCalculate;