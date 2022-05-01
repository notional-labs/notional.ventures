import React from "react";
import "./Stake.css";
import Atom from "../../media/stake/Gaia.svg";
// import Osmosis from "../../media/stake/Osmosis.svg";
// import Juno from "../../media/stake/Juno.svg";
// import Cyber from "../../media/stake/Cyber.svg";
// import Starname from "../../media/stake/Starname.svg";
// import Akash from "../../media/stake/Akash.svg";
// import Emoney from "../../media/stake/Emoney.svg";
// import Evmos from "../../media/stake/Evmos.svg";
// import Sifchain from "../../media/stake/Sifchain.svg";
// import Sentinel from "../../media/stake/Sentinel.svg";
// import Stargaze from "../../media/stake/Stargaze.svg";
import Kava from "../../media/stake/Kava.svg";
// import Ixo from "../../media/stake/Ixo.svg";
// import Secret from "../../media/stake/Secret.svg";
// import Regen from "../../media/stake/Regen.svg";

import StakeList from "./StakeList";
import { Slider, Col } from "antd";
import { useState } from "react";

const Stake = () => {
  const STAKES = [
    // {
    //   id: "s1",
    //   image: `${Osmosis}`,
    //   name: "Osmosis",
    //   api: "",
    //   address: "osmovaloper1083svrca4t350mphfv9x45wq9asrs60c6rv0j5"
    // },
    {
      id: "s2",
      image: `${Atom}`,
      name: "Atom",
      denom: "ATOM",
      api: "https://api.cosmostation.io",
      keplr: "cosmoshub",
      ping: "cosmos",
      price: "https://api.coingecko.com/api/v3/simple/price?ids=cosmos&vs_currencies=usd",
      address: "cosmosvaloper1ssm0d433seakyak8kcf93yefhknjleeds4y3em",
    },
    // {
    //   id: "s3",
    //   image: `${Juno}`,
    //   name: "Juno",
    //   api: "",
    //   address: "junovaloper1083svrca4t350mphfv9x45wq9asrs60cpqzg0y"
    // },
    // {
    //   id: "s4",
    //   image: `${Starname}`,
    //   name: "Starname",
    //   api: "",
    //   address: "starvaloper1pdqlmncych8uzsfdnsptv7s0wpazc0rgv7zc6h"
    // },
    // {
    //   id: "s5",
    //   image: `${Cyber}`,
    //   name: "Cyber",
    //   api: "",
    //   address: ""
    // },
    // {
    //   id: "s6",
    //   image: `${Akash}`,
    //   name: "Akash",
    //   api: "https://api-akash.cosmostation.io",
    //   address: "akashvaloper1g5qqaxu89qk54ex3zh6tus0a8ta2sj4fuejw9a"
    // },
    // {
    //   id: "s7",
    //   image: `${Emoney}`,
    //   name: "Emoney",
    //   api: "",
    //   address: "emoneyvaloper16dc379m0qj64g4pr4nkl7ewak52qy2srpe6lxp"
    // },
    // {
    //   id: "s8",
    //   image: `${Evmos}`,
    //   name: "Evmos",
    //   api: "",
    //   address: "evmosvaloper1rv94jqhlhx6makfwl6qs390e4shg32m6w6dxzy"
    // },
    // {
    //   id: "s9",
    //   image: `${Sifchain}`,
    //   name: "Sifchain",
    //   api: "",
    //   address: "sifvaloper1083svrca4t350mphfv9x45wq9asrs60cyssqu6"
    // },
    // {
    //   id: "s10",
    //   image: `${Sentinel}`,
    //   name: "Sentinel",
    //   api: "",
    //   address: "sentvaloper1083svrca4t350mphfv9x45wq9asrs60cv37gc8"
    // },
    // {
    //   id: "s11",
    //   image: `${Stargaze}`,
    //   name: "Stargaze",
    //   api: "",
    //   address: "starsvaloper1v8yp5x5kfex4wep2pfuuyw68cn2lst3ksl0gss"
    // },
    {
      id: "s12",
      image: `${Kava}`,
      name: "Kava",
      denom: "KAVA",
      api: "https://api-kava.cosmostation.io",

      address: "kavavaloper13jyqfhak8mu4c7pydjm3eu4qla7g06a9u6xf8g",
    },
    // {
    //   id: "s13",
    //   image: `${Ixo}`,
    //   name: "Ixo",
    //   api: "",
    // },
    // {
    //   id: "s14",
    //   image: `${Secret}`,
    //   name: "Secret",
    //   api: "",
    //   address: "secretvaloper18rchk5exp2vzcwrwuret5sjwpxhf4sq22ze4dr"
    // },
    // {
    //   id: "s15",
    //   image: `${Regen}`,
    //   name: "Regen",
    //   api: "",
    //   address: "regenvaloper1083svrca4t350mphfv9x45wq9asrs60ct2p9a5"
    // },
    // {
    //   id: "s16",
    //   image: `${Secret}`,
    //   name: "Omniflix",
    //   api: "",
    //   address: "omniflixvaloper15wshq6lmxmcn9vxky2mxf8zhstpn9ywmfc5ke5"
    // },
    // {
    //   id: "s17",
    //   image: `${Secret}`,
    //   name: "Likecoin",
    //   api: "",
    //   address: ""
    // },
    // {
    //   id: "s18",
    //   image: `${Secret}`,
    //   name: "Kichain",
    //   api: "",
    //   address: "kivaloper1lmkzaxztjpesh0mf7qy76l5npqwc7fk3l2k57g"
    // },
    // {
    //   id: "s19",
    //   image: `${Secret}`,
    //   name: "Cheq",
    //   api: "",
    //   address: ""
    // },
    // {
    //   id: "s20",
    //   image: `${Secret}`,
    //   name: "Band",
    //   api: "",
    //   address: "bandvaloper19huytqr8srz9wcdhvas5cvxddg8dtqcv6tce0s"
    // },
    // {
    //   id: "s21",
    //   image: `${Secret}`,
    //   name: "Chihuahua",
    //   api: "",
    //   address: "chihuahuavaloper1h6vcu4r2hx70x5f0l3du3ey2g98u9ut2tafnnv"
    // },
    // {
    //   id: "s22",
    //   image: `${Secret}`,
    //   name: "Konstellation",
    //   api: "",
    //   address: "darcvaloper1fndgrsqmmq68ppl42wjkxh32nwpuj7vqtgep38"
    // },
    // {
    //   id: "s23",
    //   image: `${Secret}`,
    //   name: "Vidulum",
    //   api: "",
    // },
    // {
    //   id: "s24",
    //   image: `${Secret}`,
    //   name: "Provenance",
    //   api: "pbvaloper10ap9fj9uq50cardmlzdj367kqg5x3ghjdp2v6p",
    // },
    // {
    //   id: "s25",
    //   image: `${Secret}`,
    //   name: "Bitcanna",
    //   api: "",
    //   address: "bcnavaloper1dl7w3myyfmnarh0t5uxmy7qe6szagz3kyhzq07"
    // },
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
