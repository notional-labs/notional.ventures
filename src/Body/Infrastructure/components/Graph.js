import React, { createRef, useEffect } from "react";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

const gData = {
    "nodes": [
        {"id": "atom", "img": "atom.png"},
        {"id": "dig", "img": "dig.png"},
        {"id": "emoney", "img": "emoney.png"},
        {"id": "fetch", "img": "fetch.png"},
        {"id": "ixo", "img": "ixo.png"},
        {"id": "juno", "img": "juno.png"},
        {"id": "osmosis", "img": "osmosis.png"},
        {"id": "sifchain", "img": "sifchain.png"},
        {"id": "stargaze", "img": "stargaze.png"},
        {"id": "starname", "img": "starname.png"},
        {"id": "umee", "img": "umee.png"},
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