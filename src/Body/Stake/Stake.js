import React from "react";
import "./Stake.css";
import Osmosis from "../../media/stake/Osmosis.svg";
import Atom from "../../media/stake/Gaia.svg";
import Juno from "../../media/stake/Juno.svg";
import Cyber from "../../media/stake/Cyber.svg";
import Starname from "../../media/stake/Starname.svg";
import Akash from "../../media/stake/Akash.svg";
import Emoney from "../../media/stake/Emoney.svg";
import Evmos from "../../media/stake/Evmos.svg";
import Sifchain from "../../media/stake/Sifchain.svg";
import Sentinel from "../../media/stake/Sentinel.svg";
import Stargaze from "../../media/stake/Stargaze.svg";
import Kava from "../../media/stake/Kava.svg";
import Ixo from "../../media/stake/Ixo.svg";
import Secret from "../../media/stake/Secret.svg";
import Regen from "../../media/stake/Regen.svg";

import StakeList from "./StakeList";

const Stake = () => {
  const STAKES = [
    {
      id: "s1",
      image: `${Osmosis}`,
      name: "Osmosis",
      api: "https://api-kava.cosmostation.io",
      rpc: ""
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: "Atom",
      api: "https://api.cosmostation.io",
    },
    {
      id: "s3",
      image: `${Juno}`,
      name: "Juno",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s4",
      image: `${Starname}`,
      name: "Starname",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s5",
      image: `${Cyber}`,
      name: "Cyber",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s6",
      image: `${Akash}`,
      name: "Akash",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s7",
      image: `${Emoney}`,
      name: "Emoney",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s8",
      image: `${Evmos}`,
      name: "Evmos",
      api: "",
    },
    {
      id: "s9",
      image: `${Sifchain}`,
      name: "Sifchain",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s10",
      image: `${Sentinel}`,
      name: "Sentinel",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s11",
      image: `${Stargaze}`,
      name: "Stargaze",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s12",
      image: `${Kava}`,
      name: "Kava",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s13",
      image: `${Ixo}`,
      name: "Ixo",
      api: "",
    },
    {
      id: "s14",
      image: `${Secret}`,
      name: "Secret",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s15",
      image: `${Regen}`,
      name: "Regen",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s16",
      image: `${Secret}`,
      name: "Omniflix",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s17",
      image: `${Secret}`,
      name: "Likecoin",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s18",
      image: `${Secret}`,
      name: "Kichain",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s19",
      image: `${Secret}`,
      name: "Cheq",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s20",
      image: `${Secret}`,
      name: "Band",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s21",
      image: `${Secret}`,
      name: "Chihuahua",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s22",
      image: `${Secret}`,
      name: "Konstellation",
      api: "https://api-kava.cosmostation.io",
    },
    {
      id: "s23",
      image: `${Secret}`,
      name: "Vidulum",
      api: "",
    },
    {
      id: "s24",
      image: `${Secret}`,
      name: "Provenance",
      api: "",
    },
    {
      id: "s25",
      image: `${Secret}`,
      name: "Bitcanna",
      api: "https://lcd.bitcanna.io",
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
