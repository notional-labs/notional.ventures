// import React from "react";
// import ForceGraph3D from "react-force-graph-3d";
// import loadable from '@loadable/component'
// // import SpriteText from "three-spritetext";
// // import THREE from "react-three"
// // import  from "three-spritetext"
// import * as THREE from 'three';
// import data from './test-img.json'
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

import React from "react";
// import renderMindMap from "./renderMindMap";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

// import MindMap from "./MindMap";


// Random connected graph
const gData = {
    "nodes": [
        {"id": "billy", "img": "billy.jpg"},
        {"id": "chinh", "img": "chinh.jpg"},
        {"id": "du1", "img": "du1.jpg"},
        {"id": "Hieu1", "img": "Hieu1.jpg"},
        {"id": "Huy1", "img": "Huy1.jpg"},
        {"id": "khanh1", "img": "khanh1.jpg"},
        {"id": "long", "img": "long.jpg"},
        {"id": "minh", "img": "minh.jpg"},
        {"id": "son", "img": "son.jpg"},
        {"id": "vinh1", "img": "vinh1.jpg"},
        {"id": "vuong1", "img": "vuong.jpg"}
      ],
      "links": [
        {"source": "billy", "target": "son"},
        {"source": "long", "target": "son"},
        {"source": "vuong1", "target": "son"},
        {"source": "vuong1", "target": "long"},
        {"source": "minh", "target": "son"},
        {"source": "khanh1", "target": "son"},
        {"source": "du1", "target": "son"},
        {"source": "Huy1", "target": "son"},
        {"source": "chinh", "target": "son"},
        {"source": "chinh", "target": "son"},
        {"source": "Hieu1", "target": "du1"},
        {"source": "Hieu1", "target": "vuong1"},
        {"source": "Hieu1", "target": "long"},
        {"source": "Hieu1", "target": "son"},
        {"source": "minh", "target": "Hieu1"},
        {"source": "du1", "target": "Hieu1"},
        {"source": "chinh", "target": "Hieu1"},
        {"source": "long", "target": "Hieu1"},
        {"source": "long", "target": "chinh"},
        {"source": "long", "target": "chinh"},
        {"source": "vinh1", "target": "chinh"},
        {"source": "son", "target": "khanh1"},
        {"source": "son", "target": "long"}
      ]
};

export default function App() {
  return (
    <ForceGraph3D
      graphData={gData}
      nodeThreeObject={({ img }) => {
        const imgTexture = new THREE.TextureLoader().load(`./members/${img}`);
        const material = new THREE.SpriteMaterial({ map: imgTexture });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(12, 12);

        return sprite;
      }}
    />
  );
}