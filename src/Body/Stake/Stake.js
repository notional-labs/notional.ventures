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
      chainUrl: "https://lcd-osmosis.blockapsis.com/v1/status",
    },
    {
      id: "s2",
      image: `${Atom}`,
      name: "Atom",
      chainUrl: "https://lcd-cosmoshub.blockapsis.com/v1/status",
    },
    {
      id: "s3",
      image: `${Juno}`,
      name: "Juno",
      chainUrl: "https://rest-juno.ecostake.com/v1/status",
    },
    {
      id: "s4",
      image: `${Starname}`,
      name: "Starname",
      chainUrl: "",
    },
    {
      id: "s5",
      image: `${Cyber}`,
      name: "Cyber",
      chainUrl: "https://api.cyber.notional.ventures/v1/status",
    },
    {
      id: "s6",
      image: `${Akash}`,
      name: "Akash",
      chainUrl: "https://rest-akash.ecostake.com/v1/status",
    },
    {
      id: "s7",
      image: `${Emoney}`,
      name: "Emoney",
      chainUrl: "https://lcd-emoney.keplr.app/v1/status",
    },
    {
      id: "s8",
      image: `${Evmos}`,
      name: "Evmos",
      chainUrl: "",
    },
    {
      id: "s9",
      image: `${Sifchain}`,
      name: "Sifchain",
      chainUrl: "https://api.sifchain.finance/v1/status",
    },
    {
      id: "s10",
      image: `${Sentinel}`,
      name: "Sentinel",
      chainUrl: "https://lcd-sentinel.keplr.app/v1/status",
    },
    {
      id: "s11",
      image: `${Stargaze}`,
      name: "Stargaze",
      chainUrl: "https://rest.stargaze-apis.com/v1/status",
    },
    {
      id: "s12",
      image: `${Kava}`,
      name: "Kava",
      chainUrl: "https://api.data.kava.io/v1/status",
    },
    {
      id: "s13",
      image: `${Ixo}`,
      name: "Ixo",
      chainUrl: "",
    },
    {
      id: "s14",
      image: `${Secret}`,
      name: "Secret",
      chainUrl: "https://lcd-secret.scrtlabs.com/v1/status",
    },
    {
      id: "s15",
      image: `${Regen}`,
      name: "Regen",
      chainUrl: "http://public-rpc.regen.vitwit.com/v1/status",
    },
    {
      id: "s16",
      image: `${Secret}`,
      name: "Omniflix",
      chainUrl: "https://api.omniflixhub.notional.ventures/v1/status",
    },
    {
      id: "s17",
      image: `${Secret}`,
      name: "Likecoin",
      chainUrl: "https://mainnet-node.like.co/api/v1/status",
    },
    {
      id: "s18",
      image: `${Secret}`,
      name: "Kichain",
      chainUrl: "https://api-mainnet.blockchain.ki/v1/status",
    },
    {
      id: "s19",
      image: `${Secret}`,
      name: "Cheq",
      chainUrl: "https://api.cheqd.net/v1/status",
    },
    {
      id: "s20",
      image: `${Secret}`,
      name: "Band",
      chainUrl: "https://laozi1.bandchain.org/api/v1/status",
    },
    {
      id: "s21",
      image: `${Secret}`,
      name: "Chihuahua",
      chainUrl: "https://api.chihuahua.wtf/v1/status",
    },
    {
      id: "s22",
      image: `${Secret}`,
      name: "Konstellation",
      chainUrl: "",
    },
    {
      id: "s23",
      image: `${Secret}`,
      name: "Vidulum",
      chainUrl: "",
    },
    {
      id: "s24",
      image: `${Secret}`,
      name: "Provenance",
      chainUrl: "",
    },
    {
      id: "s25",
      image: `${Secret}`,
      name: "Bitcanna",
      chainUrl: "https://lcd.bitcanna.io/v1/status",
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
