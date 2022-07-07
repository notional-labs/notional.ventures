import React, { Component } from "react";
import ForceGraph3D from "react-force-graph-3d";
import "./Graph.css";
import { Sprite, CanvasTexture, SpriteMaterial } from "three";

const Graph = () => {
  const genRandomTree = (N = 50) => {
    return {
      nodes: [...Array(N).keys()].map(i => ({
        id: i,
        canvas: drawCircle()
      })),
      links: [...Array(N).keys()]
        .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id - 1))
        }))
    };

    //draw a circle to a canvas and return
    function drawCircle() {
      let canvas = document.createElement("canvas");
      canvas.id = "canvas";
      canvas.width = 32;
      canvas.height = 32;
      let ctx = canvas.getContext("2d");
      let PI2 = Math.PI * 2;
      ctx.arc(16, 16, 16, 0, PI2, true);
      ctx.fillStyle = "red";
      ctx.fill();

      return canvas;
    }
  };

    const data = genRandomTree();
    return (
      <ForceGraph3D
        className="infra-graph"
        graphData={data}
        backgroundColor="grey"
        nodeLabel="id"
        width={2000}
        height={2000}
        nodeId="id"
        linkCurvature={0.1}
        nodeThreeObject={({ canvas }) => {
          const imageTexture = new CanvasTexture(canvas);
          // imageTexture.needsUpdate = true;
          const material = new SpriteMaterial({
            map: imageTexture,
            transparent: false
          });
          const sprite = new Sprite(material);
          sprite.scale.set(16, 16);
          return sprite;
        }}
      />
    );
}

export default Graph;
