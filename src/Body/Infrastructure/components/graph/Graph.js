import React, { useRef } from "react";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

const gData = {
  "nodes": [
    {"id": "atom", "img": "gaia.png", "weight": "2"},
    {"id": "emoney", "img": "emoney.png", "weight": "1"},
    {"id": "fetch", "img": "fetch.png", "weight": "1"},
    {"id": "axelar", "img": "axelar.png", "weight": "1"},
    {"id": "juno", "img": "juno.png", "weight": "1"},
    {"id": "osmosis", "img": "osmosis.png", "weight": "2"},
    {"id": "sifchain", "img": "sifchain.png", "weight": "1"},
    {"id": "omniflix", "img": "omniflix.png", "weight": "1"},
    {"id": "akash", "img": "akash.png", "weight": "1"},
    {"id": "dig", "img": "digchain.png", "weight": "1"},
    {"id": "kava", "img": "kava.png", "weight": "1"},
    {"id": "evmos", "img": "evmos.png", "weight": "1"},
    {"id": "regen", "img": "regen.png", "weight": "1"},
    {"id": "iris", "img": "iris.png", "weight": "1"},
    {"id": "injective", "img": "injective.png", "weight": "1"},
    {"id": "sentinel", "img": "sentinel.png", "weight": "1"},
    {"id": "konstellation", "img": "konstellation.png", "weight": "1"},
    {"id": "crypto", "img": "cryto-org.png", "weight": "1"},
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
    {"source": "osmosis", "target": "evmos"},
    {"source": "osmosis", "target": "iris"},
    {"source": "osmosis", "target": "regen"},
    {"source": "osmosis", "target": "injective"},
    {"source": "osmosis", "target": "sentinel"},
    {"source": "osmosis", "target": "konstellation"},
    {"source": "osmosis", "target": "crypto"},

    {"source": "atom", "target": "crypto"},
    {"source": "atom", "target": "omniflix"},
    {"source": "atom", "target": "emoney"},
    {"source": "atom", "target": "fetch"},
    {"source": "atom", "target": "axelar"},
    {"source": "atom", "target": "juno"},
    {"source": "atom", "target": "sifchain"},
    {"source": "atom", "target": "akash"},
    {"source": "atom", "target": "dig"},
    {"source": "atom", "target": "juno"},
    {"source": "atom", "target": "kava"},
    {"source": "atom", "target": "evmos"},
    {"source": "atom", "target": "regen"},
    {"source": "atom", "target": "injective"},
    {"source": "atom", "target": "iris"},
    {"source": "atom", "target": "sentinel"},

    {"source": "axelar", "target": "sifchain"},
    {"source": "axelar", "target": "evmos"},

    {"source": "evmos", "target": "injective"},

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
      width= {1100}
      height={1000}    
      linkDirectionalParticles = {2}
      linkDirectionalParticleWidth = {0.2}
      linkDirectionalParticleSpeed = {0.003}
      // linkColor="red"
      graphData={gData}
      nodeLabel = {gData.nodes.id}
      nodeThreeObject={({ img, weight }) => {
        const imgTexture = new THREE.TextureLoader().load(`./nodes/${img}`);
        const material = new THREE.SpriteMaterial({ map: imgTexture, depthWrite: false});
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(12 * weight, 12 * weight);
        return sprite;
      }}
    />
  );
}
