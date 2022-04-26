import React from "react";
import "./Stake.css";
import Osmosis from "../../media/stake/Osmosis.png";
import Atom from "../../media/stake/Gaia.png";
import StakeList from "./StakeList";

const Stake = () => {
  const STAKES = [
    {
      id: "s1",
      image: `${Osmosis}`,
      name: 'Osmosis',
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: 'Atom',
    },
    {
      id: "s3",
      image: `${Osmosis}`,
      name: 'Osmosis',
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: 'Atom',
    },
    {
      id: "s3",
      image: `${Osmosis}`,
      name: 'Osmosis',
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: 'Atom',
    },
    {
      id: "s3",
      image: `${Osmosis}`,
      name: 'Osmosis',
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: 'Atom',
    },
    {
      id: "s3",
      image: `${Osmosis}`,
      name: 'Osmosis',
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: 'Atom',
    },
    {
      id: "s3",
      image: `${Osmosis}`,
      name: 'Osmosis',
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: 'Atom',
    },
    {
      id: "s3",
      image: `${Osmosis}`,
      name: 'Osmosis',
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: 'Atom',
    },
    {
      id: "s3",
      image: `${Osmosis}`,
      name: 'Osmosis',
    },
  ];
  return (
    <div className="stake-section">
      <div className="title">
        <hr className="bar"></hr>
        <p className="name">Stake With Us</p>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
          ante in nisi ultricies pharetra sed at metus. Integer sem nisi,
          blandit egestas pellentesque eget, facilisis et ipsum. Quisque sodales
          quam eu rhoncus pellentesque.{" "}
        </p>
      </div>
      <div className="stake">
        <StakeList stakes = {STAKES} />
      </div>
    </div>
  );
};

export default Stake;
