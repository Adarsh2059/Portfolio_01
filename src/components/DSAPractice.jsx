import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const dsaTopics = [
  "Arrays",
  "Strings",
  "Linked Lists",
  "Stacks",
  "Queues",
  "Trees",
  "Graphs",
  "Heaps",
  "Recursion",
  "Dynamic Programming",
  "Greedy Algorithms",
  "Sorting & Searching",
];

// Tree Node Coordinates for SVG Rendering
const treeNodes = [
  { id: 1, label: "Node 1 (Root)", cx: 160, cy: 30, val: 50 },
  { id: 2, label: "Node 2", cx: 80, cy: 90, val: 30 },
  { id: 3, label: "Node 3", cx: 240, cy: 90, val: 70 },
  { id: 4, label: "Node 4", cx: 40, cy: 150, val: 20 },
  { id: 5, label: "Node 5", cx: 120, cy: 150, val: 40 },
  { id: 6, label: "Node 6", cx: 200, cy: 150, val: 60 },
  { id: 7, label: "Node 7", cx: 280, cy: 150, val: 80 },
];

const treeConnections = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 6 },
  { from: 3, to: 7 },
];

// Traversal sequence for BFS/DFS simulation
const bfsSequence = [1, 2, 3, 4, 5, 6, 7];
const dfsSequence = [1, 2, 4, 5, 3, 6, 7];

export default function DSAPractice() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [traversalType, setTraversalType] = useState("BFS"); // BFS or DFS
  const [activeStep, setActiveStep] = useState(0); // Index in sequence
  const [visited, setVisited] = useState([]);
  const [structureQueue, setStructureQueue] = useState([]);

  const currentSequence = traversalType === "BFS" ? bfsSequence : dfsSequence;

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prevStep) => {
        const nextStep = (prevStep + 1) % (currentSequence.length + 1);
        
        // Reset states if looped back
        if (nextStep === 0) {
          setVisited([]);
          setStructureQueue([currentSequence[0]]);
        } else {
          const newVisited = currentSequence.slice(0, nextStep);
          setVisited(newVisited);

          // Update Queue/Stack mock visualizer
          if (traversalType === "BFS") {
            // Queue: items loaded but not visited yet
            const unvisited = currentSequence.slice(nextStep);
            setStructureQueue(unvisited.slice(0, 3));
          } else {
            // Stack simulation
            const stackState = [];
            // DFS stack representation based on current node
            const currNode = currentSequence[nextStep - 1];
            if (currNode === 1) stackState.push(3, 2);
            else if (currNode === 2) stackState.push(3, 5, 4);
            else if (currNode === 4) stackState.push(3, 5);
            else if (currNode === 5) stackState.push(3);
            else if (currNode === 3) stackState.push(7, 6);
            else if (currNode === 6) stackState.push(7);
            else stackState.push();
            setStructureQueue(stackState);
          }
        }

        return nextStep;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [isPlaying, traversalType, currentSequence]);

  const handleReset = () => {
    setActiveStep(0);
    setVisited([]);
    setStructureQueue([currentSequence[0]]);
  };

  return (
    <section id="dsa" className="relative py-24 bg-[#0a0a0f] cyber-grid overflow-hidden">
      {/* Decorative Glow */}
      <div className="glow-spot w-96 h-96 bg-primary/5 top-1/4 left-[-150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Wording & Tags */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-6">
            <span className="font-mono text-sm uppercase tracking-widest text-primary">
              // Core Computer Science
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              "I don't just build. I solve."
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Coding is more than stacking frameworks. To me, engineering is defined by optimal solutions and performance benchmarks. I actively practice solving data structures and algorithms, utilizing <span className="text-white font-semibold font-mono">C++</span> as my primary language to solve complex runtime and space complexity problems.
            </p>

            <div className="flex flex-col gap-3 w-full">
              <h4 className="font-mono text-xs font-semibold text-slate-400 tracking-wider uppercase">
                Active Topic Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {dsaTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 rounded-lg bg-surface-dark border border-border-dark text-slate-300 font-sans text-xs hover:border-primary/30 hover:text-primary transition-all duration-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Traverser */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="w-full max-w-[440px] bg-[#0c0c11] border border-border-dark rounded-xl shadow-2xl overflow-hidden p-6 relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary" />

              {/* Title & Controller Bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-dark">
                <div className="flex flex-col text-left">
                  <h4 className="font-display font-semibold text-sm text-white">BST Traversal Engine</h4>
                  <p className="text-[10px] text-slate-500 font-mono">Visualizing algorithms in real-time</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setTraversalType((prev) => (prev === "BFS" ? "DFS" : "BFS"));
                      handleReset();
                    }}
                    className="px-2.5 py-1 rounded bg-surface-dark border border-border-dark text-slate-300 hover:text-primary font-mono text-[10px] transition-colors"
                  >
                    Type: {traversalType}
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 rounded bg-surface-dark border border-border-dark text-slate-400 hover:text-primary transition-colors"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-1 rounded bg-surface-dark border border-border-dark text-slate-400 hover:text-primary transition-colors"
                    title="Reset"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Tree Diagram SVG */}
              <div className="relative w-full flex justify-center mb-6">
                <svg viewBox="0 0 320 180" className="w-full h-auto max-w-[300px]">
                  {/* Lines Connections */}
                  {treeConnections.map((c, idx) => {
                    const fromNode = treeNodes.find((n) => n.id === c.from);
                    const toNode = treeNodes.find((n) => n.id === c.to);
                    
                    // Connection highlighted if target is visited
                    const isHighlighted = visited.includes(toNode.id);

                    return (
                      <line
                        key={idx}
                        x1={fromNode.cx}
                        y1={fromNode.cy}
                        x2={toNode.cx}
                        y2={toNode.cy}
                        stroke={isHighlighted ? "#00f0ff" : "rgba(255,255,255,0.06)"}
                        strokeWidth={isHighlighted ? 1.5 : 1}
                        className="transition-colors duration-500"
                      />
                    );
                  })}

                  {/* Nodes Circles */}
                  {treeNodes.map((n) => {
                    const isVisited = visited.includes(n.id);
                    const isCurrent = activeStep > 0 && currentSequence[activeStep - 1] === n.id;

                    return (
                      <g key={n.id}>
                        <circle
                          cx={n.cx}
                          cy={n.cy}
                          r={11}
                          fill={isCurrent ? "#00f0ff" : isVisited ? "rgba(0, 240, 255, 0.15)" : "#0f0f14"}
                          stroke={isCurrent ? "#00f0ff" : isVisited ? "#00f0ff" : "rgba(255,255,255,0.15)"}
                          strokeWidth={1.5}
                          className="transition-all duration-300"
                        />
                        <text
                          x={n.cx}
                          y={n.cy + 3.5}
                          textAnchor="middle"
                          fill={isCurrent ? "#070709" : "#ffffff"}
                          fontSize={8}
                          fontWeight="bold"
                          className="select-none font-mono"
                        >
                          {n.val}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Data Variables Display Console */}
              <div className="bg-[#08080a] border border-border-dark p-3 rounded font-mono text-[10px] text-left flex flex-col gap-1.5">
                <div>
                  <span className="text-slate-500">Traversal:</span>{" "}
                  <span className="text-primary font-bold">{traversalType}</span>
                </div>
                <div>
                  <span className="text-slate-500">Visited Node:</span>{" "}
                  <span className="text-slate-300">
                    {visited.length > 0
                      ? `[ ${visited.map((v) => treeNodes.find((n) => n.id === v).val).join(", ")} ]`
                      : "[]"}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500">
                    {traversalType === "BFS" ? "Queue" : "Stack"}:
                  </span>{" "}
                  <span className="text-secondary">
                    {structureQueue.length > 0
                      ? `[ ${structureQueue.map((q) => treeNodes.find((n) => n.id === q).val).join(", ")} ]`
                      : "[]"}
                  </span>
                </div>
                <div className="pt-1.5 border-t border-border-dark/60 text-[9px] text-slate-500 italic">
                  Node lighting indicates active pointer operations during check.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
