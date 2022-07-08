import React from "react";
import ForceGraph3D from "react-force-graph-3d";
import "./Graph.css";
import Data from "./relayers.json";
import { useState, useCallback } from "react";

const Graph = () => {
  const NODE_R = 8;
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [hoverNode, setHoverNode] = useState(null);

  const updateHighlight = () => {
    setHighlightNodes(highlightNodes);
    setHighlightLinks(highlightLinks);
  };

  const handleNodeHover = node => {
    highlightNodes.clear();
    highlightLinks.clear();
    if (node) {
      highlightNodes.add(node);
      node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
      node.links.forEach(link => highlightLinks.add(link));
    }

    setHoverNode(node || null);
    updateHighlight();
  };

  const handleLinkHover = link => {
    highlightNodes.clear();
    highlightLinks.clear();

    if (link) {
      highlightLinks.add(link);
      highlightNodes.add(link.source);
      highlightNodes.add(link.target);
    }

    updateHighlight();
  };

  const paintRing = useCallback((node, ctx) => {
    // add ring just for highlighted nodes
    ctx.beginPath();
    ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
    ctx.fillStyle = node === hoverNode ? 'red' : 'orange';
    ctx.fill();
  }, [hoverNode]);

  return (
    <ForceGraph3D
      className="infra-graph"
      graphData={Data}
      // backgroundColor="rgba(0,0,0,0)"
      backgroundColor="grey"
      nodeLabel="id"
      width={1000}
      nodeColor="white"
      height={1000}
      nodeId="id"
      linkCurvature={0.1}
      nodeRelSize={NODE_R}
      autoPauseRedraw={false}
      linkWidth={link => highlightLinks.has(link) ? 5 : 1}
      linkDirectionalParticles={4}
      linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 4 : 0}
      nodeCanvasObjectMode={node => highlightNodes.has(node) ? 'before' : undefined}
      nodeCanvasObject={paintRing}
      onNodeHover={handleNodeHover}
      onLinkHover={handleLinkHover}
    />
  );
}

export default Graph;
