import React from "react";
import "./StakeCalculate.css";
import { useState } from "react";
import { Slider, Col } from "antd";
import "antd/dist/antd.css";

const StakeCalculate = (props) => {
  let inflation = props.inflation;
  let bondedRatio = props.pool / props.supply;
  let price = props.price
  let annualProfit = (((inflation * (1 - 0.02)) / bondedRatio) * 100).toFixed(
    2
  );
  const [value, setValue] = useState(1000);
  const onChangeHandler = (value) => {
    setValue(value);
  };
  return (
    <div className="calculate">
      <div className="text">
        <div className="token-amount">
          <p className="label">How many {props.denom} do you have?</p>
          <h1 className="value">
            {value} {props.denom}
          </h1>
        </div>

        <div className="annual-profit">
          <p className="label">Annual Profit</p>
          <h1 className="value">{annualProfit}%</h1>
        </div>
      </div>
      <div className="slider-caculate">
        <Col span={21} style={{ height: "auto" ,margin: 'auto auto' }}>
          <Slider style={{height: '1rem'}} min={1} max={10000} onChange={onChangeHandler} value={value} />
        </Col>
      </div>
      <div className="reward-table">
          <div>Daily Rewards {(value*annualProfit/100/365).toFixed(2)} = {((value*annualProfit/100/365)*price).toFixed(2)}$</div>
          <div>Monthly Rewards {(value*annualProfit/100/12).toFixed(2)} = {((value*annualProfit/100/12)*price).toFixed(2)}$</div>
          <div>Annual Rewards {(value*annualProfit/100).toFixed(2)} = {((value*annualProfit/100)*price).toFixed(2)}$</div>
      </div>
  
    </div>
  );
};

export default StakeCalculate;
