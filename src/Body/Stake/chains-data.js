import Atom from "../../media/stake/Gaia.svg";
import Osmosis from "../../media/stake/Osmosis.svg";
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
import Kichain from "../../media/stake/Kichain.svg";
import Likecoin from "../../media/stake/Likecoin.svg";
import Konstellation from "../../media/stake/darc.svg";
import Cheq from "../../media/stake/cheq.svg";
import Bitcanna from "../../media/stake/bitcanna.svg";
import Band from "../../media/stake/Band.svg";
import Provenance from "../../media/stake/Provenance.svg";
import Vidulum from "../../media/stake/vidulum.svg";
import Omniflix from "../../media/stake/omniflix.svg";
import Chihuahua from "../../media/stake/chihuahua.svg";
import Fetchai from "../../media/stake/Fetch.svg";
import Umee from "../../media/stake/Umee.svg";

export const STAKES = [
  {
    id: "s1",
    image: `${Osmosis}`,
    name: "Osmosis",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/osmosis",
    keplr: "osmosis",
    ping: "osmosis",
    address: "osmovaloper1083svrca4t350mphfv9x45wq9asrs60c6rv0j5",
    rank: "25"
  },
  {
    id: "s2",
    image: `${Atom}`,
    name: "Cosmoshub",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/gaia",
    keplr: "cosmoshub",
    ping: "cosmos",
    address: "cosmosvaloper1083svrca4t350mphfv9x45wq9asrs60cdmrflj",
    rank: "67"
  },
  {
    id: "s3",
    image: `${Juno}`,
    name: "Juno",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/juno",
    keplr: "juno",
    ping: "juno",
    address: "junovaloper1083svrca4t350mphfv9x45wq9asrs60cpqzg0y",
    rank: "16"
  },
  {
    id: "s4",
    image: `${Starname}`,
    name: "Starname",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/starname",
    keplr: "iov-mainnet",
    ping: "starname",
    address: "starvaloper1pdqlmncych8uzsfdnsptv7s0wpazc0rgv7zc6h",
    rank: "10"

  },
  {
    id: "s5",
    image: `${Cyber}`,
    name: "Cyber",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/cyber",
    keplr: "bostrom",
    ping: "bostrom",
    address: "bostromvaloper1g65rmjkeuy5rywx04s4fvwfylmlz98vq4gzln5",
    rank: "5"

  },
  {
    id: "s6",
    image: `${Akash}`,
    name: "Akash",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/akash",
    keplr: "akashnet",
    ping: "akash-network",
    address: "akashvaloper1083svrca4t350mphfv9x45wq9asrs60c0k5a63",
    rank: "41"

  },
  {
    id: "s7",
    image: `${Emoney}`,
    name: "E-Money",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/emoney",
    keplr: "emoney",
    ping: "e-money",
    address: "emoneyvaloper16dc379m0qj64g4pr4nkl7ewak52qy2srpe6lxp",
    rank: "18"

  },
  {
    id: "s8",
    image: `${Evmos}`,
    name: "Evmos",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/evmos",
    keplr: "evmos",
    ping: "evmos",
    address: "evmosvaloper1rv94jqhlhx6makfwl6qs390e4shg32m6w6dxzy",
    rank: "9"

  },
  {
    id: "s9",
    image: `${Sifchain}`,
    name: "Sifchain",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/sif",
    keplr: "sifchain",
    ping: "sifchain",
    address: "sifvaloper1083svrca4t350mphfv9x45wq9asrs60cyssqu6",
    rank: "22"

  },
  {
    id: "s10",
    image: `${Sentinel}`,
    name: "Sentinel",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/sentinel",
    keplr: "sentinel",
    ping: "sentinel",
    address: "sentvaloper1083svrca4t350mphfv9x45wq9asrs60cv37gc8",
    rank: "35"

  },
  {
    id: "s11",
    image: `${Stargaze}`,
    name: "Stargaze",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/stargaze",
    keplr: "stargaze",
    ping: "stargaze",
    address: "starsvaloper1v8yp5x5kfex4wep2pfuuyw68cn2lst3ksl0gss",
    rank: "35"

  },
  {
    id: "s12",
    image: `${Kava}`,
    name: "Kava",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/kava",
    keplr: "kava",
    ping: "kava",
    address: "kavavaloper13jyqfhak8mu4c7pydjm3eu4qla7g06a9u6xf8g",
    rank: "27"

  },
  {
    id: "s13",
    image: `${Ixo}`,
    name: "IXO",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/ixo",
    keplr: "impacthub",
    ping: "ixo",
    address: "ixovaloper1083svrca4t350mphfv9x45wq9asrs60camel0h",
    rank: "43"

  },
  {
    id: "s14",
    image: `${Secret}`,
    name: "Secret",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/secret",
    keplr: "secret",
    ping: "secret",
    address: "secretvaloper18rchk5exp2vzcwrwuret5sjwpxhf4sq22ze4dr",
    rank: "63"

  },
  {
    id: "s15",
    image: `${Regen}`,
    name: "Regen",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/regen",
    keplr: "regen",
    ping: "regen",
    address: "regenvaloper1083svrca4t350mphfv9x45wq9asrs60ct2p9a5",
    rank: "30"

  },
  {
    id: "s16",
    image: `${Omniflix}`,
    name: "Omniflix",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/flix",
    keplr: "",
    ping: "omniflix",
    address: "omniflixvaloper15wshq6lmxmcn9vxky2mxf8zhstpn9ywmfc5ke5",
    rank: "1"

  },
  {
    id: "s17",
    image: `${Likecoin}`,
    name: "Likecoin",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/like",
    keplr: "",
    ping: "likecoin",
    address: "cosmosvaloper16dc379m0qj64g4pr4nkl7ewak52qy2srvwj2rz",
    rank: "39"

  },
  {
    id: "s18",
    image: `${Kichain}`,
    name: "Kichain",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/ki",
    keplr: "",
    ping: "kichain",
    address: "kivaloper1lmkzaxztjpesh0mf7qy76l5npqwc7fk3l2k57g",
    rank: "83"

  },
  {
    id: "s19",
    image: `${Cheq}`,
    name: "Cheq",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/cheq",
    keplr: "",
    ping: "cheqd",
    address: "cheqdvaloper1gyjqlfkrggd0uyd748fw9y5kq9xzmjqqh8848x",
    rank: "19"

  },
  {
    id: "s20",
    image: `${Band}`,
    name: "Band",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/band",
    keplr: "",
    ping: "band-protocol",
    address: "bandvaloper19huytqr8srz9wcdhvas5cvxddg8dtqcv6tce0s",
    rank: "68"

  },
  {
    id: "s21",
    image: `${Chihuahua}`,
    name: "Chihuahua",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/chihuahua",
    keplr: "",
    ping: "chihuahua",
    address: "chihuahuavaloper1h6vcu4r2hx70x5f0l3du3ey2g98u9ut2tafnnv",
    rank: "19"

  },
  {
    id: "s22",
    image: `${Konstellation}`,
    name: "Konstellation",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/konstellation",
    keplr: "",
    ping: "",
    address: "darcvaloper1fndgrsqmmq68ppl42wjkxh32nwpuj7vqtgep38",
    rank: "6"

  },
  {
    id: "s23",
    image: `${Vidulum}`,
    name: "Vidulum",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/vidulum",
    keplr: "",
    ping: "vidulum",
    address: "vdlvaloper16pu0t4yauhduaxvu3k29w539da5d2mfxqjdmjj",
    rank: "39"

  },
  {
    id: "s24",
    image: `${Provenance}`,
    name: "Provenance",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/provenance",
    keplr: "",
    ping: "provenance",
    address: "pbvaloper10ap9fj9uq50cardmlzdj367kqg5x3ghjdp2v6p",
    rank: "44"

  },
  {
    id: "s25",
    image: `${Bitcanna}`,
    name: "Bitcanna",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/bitcanna",
    keplr: "",
    ping: "bitcanna",
    address: "bcnavaloper1dl7w3myyfmnarh0t5uxmy7qe6szagz3kyhzq07",
    rank: "11"

  },
  {
    id: "s26",
    image: `${Fetchai}`,
    name: "Fetch.AI",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/fetch",
    keplr: "",
    ping: "fetchhub",
    address: "fetchvaloper1s9myentgxavnpw7648an2v6zvvpza0axa6dd0x",
    rank: "58"
  },
  {
    id: "s27",
    image: `${Umee}`,
    name: "Umee",
    rpc_service: "https://rpc-osmosis-ia.notional.ventures/",
    api_service: "https://api-osmosis-ia.notional.ventures/swagger/",
    api: "https://backend.notional.ventures/umee",
    keplr: "umee",
    ping: "umee",
    address: "umeevaloper1dmahqt84r9je3sqvljzjrttjj78cmrf39k5zhs",
    rank: "1"
  },
];
