import React from "react";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

const gData = {
    "nodes": [
        {"id": "atom", "img": "atom.png"},
        {"id": "darc", "img": "darc.png"},
        {"id": "emoney", "img": "emoney.png"},
        {"id": "fetch", "img": "fetch.png"},
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
        {"source": "starname", "target": "stargaze"},
        {"source": "darc", "target": "stargaze"},
        {"source": "fetch", "target": "emoney"},
        {"source": "fetch", "target": "osmosis"},
        {"source": "fetch", "target": "stargaze"},
        {"source": "sifchain", "target": "fetch"},
        {"source": "emoney", "target": "fetch"},
        {"source": "darc", "target": "fetch"},
        {"source": "osmosis", "target": "fetch"},
        {"source": "osmosis", "target": "darc"},
        {"source": "osmosis", "target": "darc"},
        {"source": "umee", "target": "darc"},
        {"source": "stargaze", "target": "juno"},
        {"source": "stargaze", "target": "osmosis"}
      ]
};

export default function Graph() {
  return (
    <ForceGraph3D
      backgroundColor="black"
      linkOpacity={0.6}
      linkDirectionalArrowLength={1}
      nodeOpacity = {0}
      // nodeRelSize={4}
      linkCurvature = {0.1}
      width= {1500}             
      graphData={gData}
      nodeLabel = {gData.nodes.id}
      nodeThreeObject={({ img }) => {
        const imgTexture = new THREE.TextureLoader().load(`./nodes/${img}`);
        const material = new THREE.SpriteMaterial({ map: imgTexture });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(12, 12);
        return sprite;
      }}
    />
  );
}