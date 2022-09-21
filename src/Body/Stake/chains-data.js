import Atom from "../../media/logo/chains-data/Gaia.svg";
import Osmosis from "../../media/logo/chains-data/Osmosis.svg";
import Juno from "../../media/logo/chains-data/Juno.svg";
import Cyber from "../../media/logo/chains-data/Cyber.svg";
import Starname from "../../media/logo/chains-data/Starname.svg";
import Akash from "../../media/logo/chains-data/Akash.svg";
import Emoney from "../../media/logo/chains-data/Emoney.svg";
import Evmos from "../../media/logo/chains-data/Evmos.svg";
import Sifchain from "../../media/logo/chains-data/Sifchain.svg";
import Sentinel from "../../media/logo/chains-data/Sentinel.svg";
import Stargaze from "../../media/logo/chains-data/Stargaze.svg";
import Kava from "../../media/logo/chains-data/Kava.svg";
import Ixo from "../../media/logo/chains-data/Ixo.svg";
import Secret from "../../media/logo/chains-data/Secret.svg";
import Regen from "../../media/logo/chains-data/Regen.svg";
import Kichain from "../../media/logo/chains-data/Kichain.svg";
import Likecoin from "../../media/logo/chains-data/Likecoin.svg";
import Konstellation from "../../media/logo/chains-data/Darc.svg";
import Cheq from "../../media/logo/chains-data/Cheq.svg";
import Bitcanna from "../../media/logo/chains-data/Bitcanna.svg";
import Band from "../../media/logo/chains-data/Band.svg";
import Provenance from "../../media/logo/chains-data/Provenance.svg";
import Vidulum from "../../media/logo/chains-data/Vidulum.svg";
import Omniflix from "../../media/logo/chains-data/Omniflix.svg";
import Chihuahua from "../../media/logo/chains-data/Chihuahua.svg";
import Fetchai from "../../media/logo/chains-data/Fetch.svg";
import Umee from "../../media/logo/chains-data/Umee.svg";
import Injective from "../../media/logo/chains-data/Injective.svg";
import Passage from "../../media/logo/chains-data/Passage.svg";

export const STAKES = [
  {
    id: "s1",
    image: `${Osmosis}`,
    name: "Osmosis",
    rpc_service: "https://rpc-osmosis-ia.cosmosia.notional.ventures/",
    api_service: "https://api-osmosis-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-osmosis-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/osmosis",
    daenom: "osmosis",
    keplr: "osmosis",
    ping: "osmosis",
    address: "osmovaloper1083svrca4t350mphfv9x45wq9asrs60c6rv0j5",
    rank: "8"
  },
  {
    id: "s2",
    image: `${Atom}`,
    name: "Cosmoshub",
    rpc_service: "https://rpc-cosmoshub-ia.cosmosia.notional.ventures/",
    api_service: "https://api-cosmoshub-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-cosmoshub-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/gaia",
    daenom: "gaia",
    keplr: "cosmos-hub",
    ping: "cosmos",
    address: "cosmosvaloper1083svrca4t350mphfv9x45wq9asrs60cdmrflj",
    rank: "65"
  },
  {
    id: "s3",
    image: `${Juno}`,
    name: "Juno",
    rpc_service: "https://rpc-juno-ia.cosmosia.notional.ventures/",
    api_service: "https://api-juno-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-juno-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/juno",
    daenom: "juno",
    keplr: "juno",
    ping: "juno",
    address: "junovaloper1083svrca4t350mphfv9x45wq9asrs60cpqzg0y",
    rank: "18"
  },
  {
    id: "s4",
    image: `${Starname}`,
    name: "Starname",
    rpc_service: "https://rpc-starname-ia.cosmosia.notional.ventures/",
    api_service: "https://api-starname-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-starname-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/starname",
    daenom: "starname",
    keplr: "iov-mainnet",
    ping: "starname",
    address: "starvaloper1pdqlmncych8uzsfdnsptv7s0wpazc0rgv7zc6h",
    rank: "10"

  },
  {
    id: "s5",
    image: `${Cyber}`,
    name: "Cyber",
    rpc_service: "https://rpc-cyber-ia.cosmosia.notional.ventures/",
    api_service: "https://api-cyber-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-cyber-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/cyber",
    daenom: "cyber",
    keplr: "bostrom",
    ping: "bostrom",
    address: "bostromvaloper1g65rmjkeuy5rywx04s4fvwfylmlz98vq4gzln5",
    rank: "5"

  },
  {
    id: "s6",
    image: `${Akash}`,
    name: "Akash",
    rpc_service: "https://rpc-akash-ia.cosmosia.notional.ventures/",
    api_service: "https://api-akash-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-akash-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/akash",
    daenom: "akash",
    keplr: "akash",
    ping: "akash-network",
    address: "akashvaloper1083svrca4t350mphfv9x45wq9asrs60c0k5a63",
    rank: "41"

  },
  {
    id: "s7",
    image: `${Emoney}`,
    name: "E-Money",
    rpc_service: "https://rpc-emoney-ia.cosmosia.notional.ventures/",
    api_service: "https://api-emoney-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-emoney-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/emoney",
    daenom: "emoney",
    keplr: "e-money",
    ping: "e-money",
    address: "emoneyvaloper16dc379m0qj64g4pr4nkl7ewak52qy2srpe6lxp",
    rank: "18"

  },
  {
    id: "s8",
    image: `${Evmos}`,
    name: "Evmos",
    rpc_service: "https://rpc-evmos-ia.cosmosia.notional.ventures/",
    api_service: "https://api-evmos-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-evmos-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/evmos",
    daenom: "evmos",
    keplr: "evmos",
    ping: "evmos",
    address: "evmosvaloper1rv94jqhlhx6makfwl6qs390e4shg32m6w6dxzy",
    rank: "17"

  },
  {
    id: "s9",
    image: `${Sifchain}`,
    name: "Sifchain",
    rpc_service: "https://rpc-sifchain-ia.cosmosia.notional.ventures/",
    api_service: "https://api-sifchain-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-sifchain-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/sif",
    daenom: "sif",
    keplr: "sifchain",
    ping: "sifchain",
    address: "sifvaloper1083svrca4t350mphfv9x45wq9asrs60cyssqu6",
    rank: "22"

  },
  {
    id: "s10",
    image: `${Sentinel}`,
    name: "Sentinel",
    rpc_service: "https://rpc-sentinel-ia.cosmosia.notional.ventures/",
    api_service: "https://api-sentinel-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-sentinel-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/sentinel",
    daenom: "sentinel",
    keplr: "sentinel",
    ping: "sentinel",
    address: "sentvaloper1083svrca4t350mphfv9x45wq9asrs60cv37gc8",
    rank: "35"

  },
  {
    id: "s11",
    image: `${Stargaze}`,
    name: "Stargaze",
    rpc_service: "https://rpc-stargaze-ia.cosmosia.notional.ventures/",
    api_service: "https://api-stargaze-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-stargaze-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/stargaze",
    daenom: "stargaze",
    keplr: "stargaze",
    ping: "stargaze",
    address: "starsvaloper1v8yp5x5kfex4wep2pfuuyw68cn2lst3ksl0gss",
    rank: "35"

  },
  {
    id: "s12",
    image: `${Kava}`,
    name: "Kava",
    rpc_service: "https://rpc-kava-ia.cosmosia.notional.ventures/",
    api_service: "https://api-kava-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-kava-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/kava",
    daenom: "kava",
    keplr: "kava",
    ping: "kava",
    address: "kavavaloper13jyqfhak8mu4c7pydjm3eu4qla7g06a9u6xf8g",
    rank: "27"

  },
  {
    id: "s13",
    image: `${Ixo}`,
    name: "IXO",
    rpc_service: "https://rpc-ixo-ia.cosmosia.notional.ventures/",
    api_service: "https://api-ixo-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-ixo-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/ixo",
    daenom: "ixo",
    keplr: "impacthub",
    ping: "ixo",
    address: "ixovaloper1083svrca4t350mphfv9x45wq9asrs60camel0h",
    rank: "43"

  },
  {
    id: "s14",
    image: `${Secret}`,
    name: "Secret",
    rpc_service: "Not available",
    api_service: "Not available",
    grpc_service: "Not available",
    api: "https://backend.notional.ventures/secret",
    daenom: "secret",
    keplr: "",
    ping: "secret",
    address: "secretvaloper18rchk5exp2vzcwrwuret5sjwpxhf4sq22ze4dr",
    rank: "63"

  },
  {
    id: "s15",
    image: `${Regen}`,
    name: "Regen",
    rpc_service: "https://rpc-regen-ia.cosmosia.notional.ventures/",
    api_service: "https://api-regen-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-regen-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/regen",
    daenom: "regen",
    keplr: "regen",
    ping: "regen",
    address: "regenvaloper1083svrca4t350mphfv9x45wq9asrs60ct2p9a5",
    rank: "30"

  },
  {
    id: "s16",
    image: `${Omniflix}`,
    name: "Omniflix",
    rpc_service: "https://rpc-omniflixhub-ia.cosmosia.notional.ventures/",
    api_service: "https://api-omniflixhub-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-omniflixhub-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/flix",
    daenom: "flix",
    keplr: "",
    ping: "omniflix",
    address: "omniflixvaloper15wshq6lmxmcn9vxky2mxf8zhstpn9ywmfc5ke5",
    rank: "1"

  },
  {
    id: "s17",
    image: `${Likecoin}`,
    name: "Likecoin",
    rpc_service: "https://rpc-likecoin-ia.cosmosia.notional.ventures/",
    api_service: "https://api-likecoin-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-likecoin-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/like",
    daenom: "like",
    keplr: "",
    ping: "likecoin",
    address: "cosmosvaloper16dc379m0qj64g4pr4nkl7ewak52qy2srvwj2rz",
    rank: "39"

  },
  {
    id: "s18",
    image: `${Kichain}`,
    name: "Kichain",
    rpc_service: "https://rpc-kichain-ia.cosmosia.notional.ventures/",
    api_service: "https://api-kichain-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-kichain-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/ki",
    daenom: "ki",
    keplr: "",
    ping: "kichain",
    address: "kivaloper1lmkzaxztjpesh0mf7qy76l5npqwc7fk3l2k57g",
    rank: "83"

  },
  {
    id: "s19",
    image: `${Cheq}`,
    name: "Cheq",
    rpc_service: "https://rpc-cheqd-ia.cosmosia.notional.ventures/",
    api_service: "https://api-cheqd-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-cheqd-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/cheq",
    daenom: "cheq",
    keplr: "",
    ping: "cheqd",
    address: "cheqdvaloper1gyjqlfkrggd0uyd748fw9y5kq9xzmjqqh8848x",
    rank: "19"

  },
  {
    id: "s20",
    image: `${Band}`,
    name: "Band",
    rpc_service: "https://rpc-bandchain-ia.cosmosia.notional.ventures/",
    api_service: "https://api-bandchain-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-bandchain-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/band",
    daenom: "band",
    keplr: "",
    ping: "band-protocol",
    address: "bandvaloper19huytqr8srz9wcdhvas5cvxddg8dtqcv6tce0s",
    rank: "68"

  },
  {
    id: "s21",
    image: `${Chihuahua}`,
    name: "Chihuahua",
    rpc_service: "https://rpc-chihuahua-ia.cosmosia.notional.ventures/",
    api_service: "https://api-chihuahua-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-chihuahua-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/chihuahua",
    daenom: "chihuahua",
    keplr: "",
    ping: "chihuahua",
    address: "chihuahuavaloper1h6vcu4r2hx70x5f0l3du3ey2g98u9ut2tafnnv",
    rank: "19"

  },
  {
    id: "s22",
    image: `${Konstellation}`,
    name: "Konstellation",
    rpc_service: "https://rpc-konstellation-ia.cosmosia.notional.ventures/",
    api_service: "https://api-konstellation-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-konstellation-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/konstellation",
    daenom: "konstellation",
    keplr: "",
    ping: "",
    address: "darcvaloper1fndgrsqmmq68ppl42wjkxh32nwpuj7vqtgep38",
    rank: "6"

  },
  {
    id: "s23",
    image: `${Vidulum}`,
    name: "Vidulum",
    rpc_service: "https://rpc-vidulum-ia.cosmosia.notional.ventures/",
    api_service: "https://api-vidulum-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-vidulum-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/vidulum",
    daenom: "vidulum",
    keplr: "",
    ping: "vidulum",
    address: "vdlvaloper16pu0t4yauhduaxvu3k29w539da5d2mfxqjdmjj",
    rank: "39"

  },
  {
    id: "s24",
    image: `${Provenance}`,
    name: "Provenance",
    rpc_service: "https://rpc-provenance-ia.cosmosia.notional.ventures/",
    api_service: "https://api-provenance-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-provenance-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/provenance",
    daenom: "provenance",
    keplr: "",
    ping: "provenance",
    address: "pbvaloper10ap9fj9uq50cardmlzdj367kqg5x3ghjdp2v6p",
    rank: "44"

  },
  {
    id: "s25",
    image: `${Bitcanna}`,
    name: "Bitcanna",
    rpc_service: "https://rpc-bitcanna-ia.cosmosia.notional.ventures/",
    api_service: "https://api-bitcanna-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-bitcanna-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/bitcanna",
    daenom: "bitcanna",
    keplr: "",
    ping: "bitcanna",
    address: "bcnavaloper1dl7w3myyfmnarh0t5uxmy7qe6szagz3kyhzq07",
    rank: "11"

  },
  {
    id: "s26",
    image: `${Fetchai}`,
    name: "Fetch.AI",
    rpc_service: "https://rpc-fetchhub-ia.cosmosia.notional.ventures/",
    api_service: "https://api-fetchhub-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-fetchhub-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/fetch",
    daenom: "fetch",
    keplr: "",
    ping: "fetchhub",
    address: "fetchvaloper1s9myentgxavnpw7648an2v6zvvpza0axa6dd0x",
    rank: "58"
  },
  {
    id: "s27",
    image: `${Umee}`,
    name: "Umee",
    rpc_service: "https://rpc-umee-ia.cosmosia.notional.ventures/",
    api_service: "https://api-umee-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-umee-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/umee",
    daenom: "umee",
    keplr: "umee",
    ping: "umee",
    address: "umeevaloper1dmahqt84r9je3sqvljzjrttjj78cmrf39k5zhs",
    rank: "86"
  },
  {
    id: "s28",
    image: `${Injective}`,
    name: "Injective",
    rpc_service: "https://rpc-injective-ia.cosmosia.notional.ventures/",
    api_service: "https://api-injective-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-injective-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/injective",
    daenom: "injective",
    keplr: "",
    ping: "injective",
    address: "injvaloper16eg6wf2k6v0lzwu2vsrhxhe0tcycgr7jm98nyz",
    rank: "15"
  },
  {
    id: "s29",
    image: `${Passage}`,
    name: "Passage",
    rpc_service: "https://rpc-passage-ia.cosmosia.notional.ventures/",
    api_service: "https://api-passage-ia.cosmosia.notional.ventures/",
    grpc_service: "https://grpc-passage-ia.cosmosia.notional.ventures/",
    api: "https://backend.notional.ventures/passage",
    daenom: "passage",
    keplr: "",
    ping: "passage",
    address: "pasgvaloper14npnd73z5qjwz4az2dpw6vcdvkj29qg0cgar4j",
    rank: "27"
  },
];
