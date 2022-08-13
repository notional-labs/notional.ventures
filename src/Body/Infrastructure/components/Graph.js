import React from "react";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

const gData = {
  "nodes": [
    {"id": "atom", "img": "atom.png"},
    {"id": "emoney", "img": "emoney.png"},
    {"id": "fetch", "img": "fetch.png"},
    {"id": "axelar", "img": "axelar.png"},
    {"id": "juno", "img": "juno.png"},
    {"id": "osmosis", "img": "osmosis.png"},
    {"id": "sifchain", "img": "sifchain.png"},
    {"id": "omniflix", "img": "omniflix.png"},
    {"id": "starname", "img": "starname.png"},
    {"id": "dig", "img": "dig.png"},
    {"id": "kava", "img": "kava.png"}
  ],
  "links": [
    {"source": "atom", "target": "omniflix"},
    {"source": "osmosis", "target": "omniflix"},
    {"source": "sifchain", "target": "omniflix"},
    {"source": "juno", "target": "omniflix"},
    {"source": "emoney", "target": "omniflix"},
    {"source": "axelar", "target": "omniflix"},
    {"source": "dig", "target": "omniflix"},
    {"source": "dig", "target": "omniflix"},
    {"source": "fetch", "target": "emoney"},
    {"source": "fetch", "target": "osmosis"},
    {"source": "fetch", "target": "omniflix"},
    {"source": "sifchain", "target": "fetch"},
    {"source": "emoney", "target": "fetch"},
    {"source": "dig", "target": "fetch"},
    {"source": "osmosis", "target": "fetch"},
    {"source": "osmosis", "target": "dig"},
    {"source": "osmosis", "target": "dig"},
    {"source": "kava", "target": "dig"},
    {"source": "omniflix", "target": "juno"},
    {"source": "omniflix", "target": "osmosis"}
  ]
};


export default function Graph() {
  return (
    <ForceGraph3D
      backgroundColor="black"
      linkOpacity={0.6}
      nodeOpacity = {0}
      // nodeResolution = {10}
      linkCurvature = {0.1}
      width= {1000}     
      height={700}    
      linkDirectionalParticles = {4}
      linkDirectionalParticleWidth = {1}
      // linkColor="red"
      graphData={gData}
      nodeLabel = {gData.nodes.id}
      nodeThreeObject={({ img }) => {
        const imgTexture = new THREE.TextureLoader().load(`./nodes/${img}`);
        const material = new THREE.SpriteMaterial({ map: imgTexture});
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(12, 12);
        return sprite;
      }}
    />
  );
}