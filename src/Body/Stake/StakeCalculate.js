import React from "react";
import "./StakeCalculate.css";
import { useState } from "react";
import { Slider } from "antd";
import "antd/dist/antd.less";
import "antd/dist/antd.css";
import Reward_divisor from "../../media/imgs/Stake/reward-divisor.png";

const StakeCalculate = (props) => {
  let price = props.price;
  let annualProfit = (props.apr * 100).toFixed(2);
  const [value, setValue] = useState(1000);
  const onChangeHandler = (value) => {
    setValue(value);
  };
  return (
    <div className="calculate">
      <table className="info">
        <tbody>
          <tr className="label">
            <td style={{ textAlign: "left" }}>
              How many {props.denom} do you have?
            </td>
            <td style={{ textAlign: "right" }}>Annual Profit</td>
          </tr>
          <tr className="value">
            <td style={{ textAlign: "left" }}>
              {value} {props.denom}
            </td>
            <td style={{ textAlign: "right" }}>{annualProfit}%</td>
          </tr>
        </tbody>
      </table>

      <div className="slider-caculate">
        <Slider
          className="slider"
          style={{ height: "2rem" }}
          min={1}
          max={5000}
          onChange={onChangeHandler}
          value={value}
          tooltip={{open: false}}
        />
      </div>

      <table className="reward-table">
        <tbody>
          <tr>
            <td className="name">Daily Rewards</td>
            <td className="token">
              {((value * annualProfit) / 100 / 365).toFixed(2)} {props.denom}
            </td>
            <td className="usd">
              ${(((value * annualProfit) / 100 / 365) * price).toFixed(2)}
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <img
                src={Reward_divisor}
                alt="reward"
                className="reward-divisor"
              />
            </td>
          </tr>
          <tr>
            <td className="name">Monthly Rewards</td>
            <td className="token">
              {((value * annualProfit) / 100 / 12).toFixed(2)} {props.denom}
            </td>
            <td className="usd">
              ${(((value * annualProfit) / 100 / 12) * price).toFixed(2)}
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <img
                src={Reward_divisor}
                alt="reward"
                className="reward-divisor"
              />
            </td>
          </tr>
          <tr>
            <td className="name">Annual Rewards</td>
            <td className="token">
              {((value * annualProfit) / 100).toFixed(2)} {props.denom}
            </td>
            <td className="usd">
              ${(((value * annualProfit) / 100) * price).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StakeCalculate;
