import React from "react";
import "./Stake.css";
import Osmosis from "../../media/stake/Osmosis.svg";
import Atom from "../../media/stake/Gaia.svg";
import Juno from "../../media/stake/Juno.svg";
import Cyber from "../../media/stake/Cyber.svg";
import Starname from "../../media/stake/Starname.svg";

import StakeList from "./StakeList";

const Stake = () => {
  const STAKES = [
    {
      id: "s1",
      image: `${Osmosis}`,
      name: "Osmosis",
      chainUrl: "https://api-bitcanna.cosmostation.io/v1/status",
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: "Atom",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s3",
      image: `${Juno}`,
      name: "Juno",
    },
    {
      id: "s2",
      image: `${Starname}`,
      name: "Starname",
    },
    {
      id: "s3",
      image: `${Cyber}`,
      name: "Cyber",
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: "Atom",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s1",
      image: `${Osmosis}`,
      name: "Osmosis",
      chainUrl: "https://api-bitcanna.cosmostation.io/v1/status",
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: "Atom",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s1",
      image: `${Osmosis}`,
      name: "Osmosis",
      chainUrl: "https://api-bitcanna.cosmostation.io/v1/status",
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: "Atom",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s1",
      image: `${Osmosis}`,
      name: "Osmosis",
      chainUrl: "https://api-bitcanna.cosmostation.io/v1/status",
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: "Atom",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s1",
      image: `${Osmosis}`,
      name: "Osmosis",
      chainUrl: "https://api-bitcanna.cosmostation.io/v1/status",
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: "Atom",
      chainUrl: "https://api.cosmostation.io/v1/status",
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
        <StakeList stakes={STAKES} />
      </div>
    </div>
  );
};

export default Stake;
