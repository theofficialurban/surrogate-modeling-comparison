import React from "react";
import {
  Clock,
  Zap,
  Target,
  Cpu,
  Server,
  FastForward,
  Activity,
  MonitorPlay,
} from "lucide-react";

export default function SurrogateComparison() {
  const features = [
    {
      name: "Core Approach",
      icon: <Server className="w-5 h-5" />,
      trad: "Physics-Based / First Principles (FEA, CFD)",
      ai: "Data-Driven / Neural Networks",
    },
    {
      name: "Computation Time",
      icon: <Clock className="w-5 h-5" />,
      trad: "Hours to Days per iteration",
      ai: "Milliseconds to Seconds",
    },
    {
      name: "Accuracy",
      icon: <Target className="w-5 h-5" />,
      trad: "Ground Truth (Highest Fidelity)",
      ai: "High Fidelity (Acceptable error margin)",
    },
    {
      name: "Compute Resources",
      icon: <Cpu className="w-5 h-5" />,
      trad: "Massive HPC / Supercomputing clusters",
      ai: "Lightweight at inference (Edge/Local)",
    },
    {
      name: "Real-Time Digital Twin",
      icon: <Activity className="w-5 h-5" />,
      trad: "Bottlenecked (Too slow for live sync)",
      ai: "Fully Enabled (Synchronous control)",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">
            System Evolution
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Data Comparison
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Traditional Physics Simulation vs. AI Surrogate Models
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 relative">
          {/* VS Badge in the middle */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-900 border-4 border-slate-950 rounded-full items-center justify-center font-bold text-slate-400">
            VS
          </div>

          {/* Traditional Simulation Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-80" />
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                <MonitorPlay className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Traditional Simulation
              </h3>
            </div>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center text-slate-500 text-sm font-medium">
                    {feature.icon}
                    <span className="ml-2">{feature.name}</span>
                  </div>
                  <p className="text-lg text-slate-300 font-medium pl-7 border-l-2 border-blue-500/30">
                    {feature.trad}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Surrogate Card */}
          <div className="bg-slate-900/80 border border-violet-500/30 rounded-2xl p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

            {/* Glow effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-violet-500/10 rounded-xl text-violet-400">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                AI Surrogate Model
              </h3>
            </div>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center text-slate-500 text-sm font-medium">
                    {feature.icon}
                    <span className="ml-2">{feature.name}</span>
                  </div>
                  <p className="text-lg text-white font-semibold pl-7 border-l-2 border-violet-500/50">
                    {feature.ai}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Impact Banner */}
        <div className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="flex flex-col mb-4 md:mb-0">
            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">
              Primary Advantage
            </span>
            <span className="text-xl text-white font-semibold">
              Exponential Design Space Exploration
            </span>
          </div>
          <div className="flex items-center space-x-3 bg-slate-950/50 px-6 py-3 rounded-full border border-slate-800">
            <FastForward className="w-6 h-6 text-fuchsia-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-bold text-2xl">
              100x - 1000x Speedup
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
