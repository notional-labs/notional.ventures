// import React from "react";
// import ForceGraph3D from "react-force-graph-3d";
// import loadable from '@loadable/component'
// // import SpriteText from "three-spritetext";
// // import THREE from "react-three"
// // import  from "three-spritetext"
// import * as THREE from 'three';
// import data from './test-img.jstargaze'
// const Graph = () => {
//     const img = data.nodes.map((id,img) => img)
//     let ForceGraph3D = loadable(() => import(`./members/${img}`));
//     const nodeToThree = ({img}) => {
//         // console.log({img});
//         const imgTexture = new THREE.TextureLoader().load(`./members/${img}`);
//         // console.log(imgTexture);
//         const material = new THREE.SpriteMaterial({ map: imgTexture });
//         // console.log(material);
//         const sprite = new THREE.Sprite(material);
//         // console.log(sprite);
//         sprite.scale.set(12, 12);
//         return sprite;
//     }
//     return (
//         <ForceGraph3D
//             graphData={data}
//             nodeThreeObject={nodeToThree}
//         />
//     )
// }

// export default Graph;

// ({img}) => {
//     console.log({img});
//     const imgTexture = new THREE.TextureLoader().load(`./members/${img}`);
//     console.log(imgTexture);
//     const material = new THREE.SpriteMaterial({ map: imgTexture });
//     console.log(material);
//     const sprite = new THREE.Sprite(material);
//     console.log(sprite);
//     sprite.scale.set(12, 12);
//     return sprite;
// }

// import React from "react";
// // import renderMindMap from "./renderMindMap";
// import ForceGraph3D from "react-force-graph-3d";
// import * as THREE from "three";

// // import MindMap from "./MindMap";


// // Random connected graph


import React, { createRef, useEffect } from "react";
// import renderMindMap from "./renderMindMap";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

const gData = {
    "nodes": [
        {"id": "atom", "img": "atom.jpg"},
        {"id": "dig", "img": "dig.jpg"},
        {"id": "emoney", "img": "emoney.jpg"},
        {"id": "fetch", "img": "fetch.jpg"},
        {"id": "ixo", "img": "ixo.jpg"},
        {"id": "juno", "img": "juno.jpg"},
        {"id": "osmosis", "img": "osmosis.jpg"},
        {"id": "sifchain", "img": "sifchain.jpg"},
        {"id": "stargaze", "img": "stargaze.jpg"},
        {"id": "starname", "img": "starname.jpg"},
        {"id": "umee", "img": "umee.jpg"},
      ],
      "links": [
        {"source": "atom", "target": "stargaze"},
        {"source": "osmosis", "target": "stargaze"},
        {"source": "sifchain", "target": "stargaze"},
        {"source": "juno", "target": "stargaze"},
        {"source": "emoney", "target": "stargaze"},
        {"source": "ixo", "target": "stargaze"},
        {"source": "dig", "target": "stargaze"},
        {"source": "dig", "target": "stargaze"},
        {"source": "fetch", "target": "emoney"},
        {"source": "fetch", "target": "osmosis"},
        {"source": "fetch", "target": "stargaze"},
        {"source": "sifchain", "target": "fetch"},
        {"source": "emoney", "target": "fetch"},
        {"source": "dig", "target": "fetch"},
        {"source": "osmosis", "target": "fetch"},
        {"source": "osmosis", "target": "dig"},
        {"source": "osmosis", "target": "dig"},
        {"source": "umee", "target": "dig"},
        {"source": "stargaze", "target": "juno"},
        {"source": "stargaze", "target": "osmosis"}
      ]
};

export default function Graph() {
  return (
    <ForceGraph3D
      graphData={gData}
      nodeThreeObject={({ img }) => {
        const imgTexture = new THREE.TextureLoader().load(`./nodes/${img}`);
        console.log(imgTexture);
        const material = new THREE.SpriteMaterial({ map: imgTexture });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(12, 12);

        return sprite;
      }}
    />
  );
}