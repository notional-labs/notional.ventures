import React from "react";
import ForceGraph3D from "react-force-graph-3d";
import "./Graph.css";
import {Data} from "./relayers";
// import { Sprite, TextureLoader, SpriteMaterial } from "three";
import { useState, useCallback } from "react";

const Graph = () => {
    
    const gData = Data;
    console.log(Data);

    gData.links.forEach(link => {
        const a = gData.nodes[link.source];
        console.log(link);
        const b = gData.nodes[link.target];
        !a.neighbors && (a.neighbors = []);
        !b.neighbors && (b.neighbors = []);
        a.neighbors.push(b);
        b.neighbors.push(a);
  
        !a.links && (a.links = []);
        !b.links && (b.links = []);
        a.links.push(link);
        b.links.push(link);
      });
      console.log(gData)
      

      const highlightNodes = new Set();
      const highlightLinks = new Set();
      let hoverNode = null;
      
    const updateHighlight = () => {
        // Graph
    };

    return (
        <ForceGraph3D
            graphData={gData}
            backgroundColor="rgba(10,10,10,100)"
            height={700}
            width={1000}
            nodeColor={node => 
                highlightNodes.has(node) ? node === hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' : 'rgba(0,255,255,0.6)'
            }
            nodeId="id"
            nodeLabel="name"
            linkCurvature={0.1}
            // nodeThreeObject={({id}) => {
            //     const imgTexture = new TextureLoader().load(`../../../media/chains/${id}.png`);
            //     const material = new SpriteMaterial({ map: imgTexture });
            //     const sprite = new Sprite(material);
            //     sprite.scale.set(20, 20);
      
            //     return sprite;
            // }}
            linkWidth={(link) => (highlightLinks.has(link) ? 4 : 1)}
            linkDirectionalParticles={link => highlightLinks.has(link) ? 4 : 0}
            linkDirectionalParticleWidth={4}
            onNodeHover={node => {
                // no state change
                if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;

                highlightNodes.clear();
                highlightLinks.clear();
                if (node) {
                    highlightNodes.add(node);
                    node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
                    node.links.forEach(link => highlightLinks.add(link));
                }

                hoverNode = node || null;

                updateHighlight();
            }}
            onLinkHover={link => {
                highlightNodes.clear();
                highlightLinks.clear();
      
                if (link) {
                  highlightLinks.add(link);
                  highlightNodes.add(link.source);
                  highlightNodes.add(link.target);
                }
      
                updateHighlight();
            }}
        />
    );
};

export default Graph;
