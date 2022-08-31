import React, { useRef } from "react";
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
    {"id": "akash", "img": "akash.png"},
    {"id": "dig", "img": "dig.png"},
    {"id": "kava", "img": "kava.png"}
  ],
  "links": [
    {"source": "osmosis", "target": "atom"},
    {"source": "osmosis", "target": "emoney"},
    {"source": "osmosis", "target": "fetch"},
    {"source": "osmosis", "target": "axelar"},
    {"source": "osmosis", "target": "juno"},
    {"source": "osmosis", "target": "sifchain"},
    {"source": "osmosis", "target": "omniflix"},
    {"source": "osmosis", "target": "akash"},
    {"source": "osmosis", "target": "dig"},
    {"source": "osmosis", "target": "kava"},
    {"source": "atom", "target": "omniflix"},
    {"source": "atom", "target": "emoney"},
    {"source": "atom", "target": "fetch"},
    {"source": "atom", "target": "axelar"},
    {"source": "atom", "target": "juno"},
    {"source": "atom", "target": "sifchain"},
    {"source": "atom", "target": "akash"},
    {"source": "atom", "target": "dig"},
    {"source": "atom", "target": "juno"},
    {"source": "atom", "target": "kava"}
  ]
};


export default function Graph() {
  const zoomRef = useRef();

  return (
    <ForceGraph3D
      ref={zoomRef}
      backgroundColor={"rgba(0,0,0,0)"}
      linkOpacity={0.4}
      nodeOpacity = {0}
      cooldownTicks={100}
      onEngineStop={() => zoomRef.current.zoomToFit()}
      linkCurvature = {0.1}
      width= {"calc(100vw * 1200 / 1920"}     
      height={700}    
      linkDirectionalParticles = {1}
      linkDirectionalParticleWidth = {0.2}
      // linkColor="red"
      graphData={gData}
      nodeLabel = {gData.nodes.id}
      nodeThreeObject={({ img }) => {
        const imgTexture = new THREE.TextureLoader().load(`./nodes/${img}`);
        const material = new THREE.SpriteMaterial({ map: imgTexture, depthWrite: false});
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(12, 12);
        return sprite;
      }}
    />
  );
}
