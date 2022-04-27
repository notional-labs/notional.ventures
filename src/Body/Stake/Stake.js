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
      id: "s4",
      image: `${Starname}`,
      name: "Starname",
    },
    {
      id: "s5",
      image: `${Cyber}`,
      name: "Cyber",
    },
    {
      id: "s6",
      image: `${Akash}`,
      name: "Akash",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s7",
      image: `${Emoney}`,
      name: "Emoney",
      chainUrl: "https://api-bitcanna.cosmostation.io/v1/status",
    },
    {
      id: "s8",
      image: `${Evmos}`,
      name: "Evmos",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s9",
      image: `${Sifchain}`,
      name: "Sifchain",
      chainUrl: "https://api-bitcanna.cosmostation.io/v1/status",
    },
    {
      id: "s10",
      image: `${Sentinel}`,
      name: "Sentinel",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s11",
      image: `${Stargaze}`,
      name: "Stargaze",
      chainUrl: "https://api-bitcanna.cosmostation.io/v1/status",
    },
    {
      id: "s12",
      image: `${Kava}`,
      name: "Kava",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s13",
      image: `${Ixo}`,
      name: "Ixo",
      chainUrl: "https://api-bitcanna.cosmostation.io/v1/status",
    },
    {
      id: "s14",
      image: `${Secret}`,
      name: "Secret",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s15",
      image: `${Regen}`,
      name: "Regen",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s16",
      image: `${Secret}`,
      name: "Omniflix",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },    
    {
      id: "s17",
      image: `${Secret}`,
      name: "Likecoin",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s18",
      image: `${Secret}`,
      name: "Kichain",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s19",
      image: `${Secret}`,
      name: "Cheq",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s20",
      image: `${Secret}`,
      name: "Band",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s21",
      image: `${Secret}`,
      name: "Chihuahua",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s22",
      image: `${Secret}`,
      name: "Konstellation",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s23",
      image: `${Secret}`,
      name: "Vidulum",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s24",
      image: `${Secret}`,
      name: "Provenance",
      chainUrl: "https://api.cosmostation.io/v1/status",
    },
    {
      id: "s25",
      image: `${Secret}`,
      name: "Bitcanna",
      chainUrl: "https://api.cosmostation.io/v1/status",
    }
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
