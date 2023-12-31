"use client";

import { useState } from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import TextSummarizer from "@/components/text-summarizer";
import AudioSummarizer from "@/components/audio-summarizer";

type Modes = "text" | "video" | "audio" | "pdf";

export default function Home() {
  const [mode, setMode] = useState<Modes>("text");

  return (
    <div className="max-w-xl mx-auto h-full flex flex-col gap-4 py-4">
      <div>
        <div className="space-y-1">
          <h1 className="text-5xl font-extrabold tracking-tight">tl:dr;</h1>
        </div>
        <div className="flex h-5 items-center space-x-4 text-sm my-4 font-semibold cursor-pointer">
          <div
            className={cn(mode === "text" ? "text-black" : "text-gray-400")}
            onClick={() => setMode("text")}
          >
            Text
          </div>
          <Separator orientation="vertical" />
          <div
            className={cn(mode === "audio" ? "text-black" : "text-gray-400")}
            onClick={() => setMode("audio")}
          >
            Audio
          </div>
          <Separator orientation="vertical" />
          <div
            className={cn(mode === "video" ? "text-black" : "text-gray-400")}
            onClick={() => setMode("video")}
          >
            Video
          </div>
          {/* <Separator orientation="vertical" />
          <div
            className={cn(mode === "pdf" ? "text-black" : "text-gray-400")}
            onClick={() => setMode("pdf")}
          >
            PDF
          </div> */}
        </div>
      </div>
      <div className="min-h-96 flex flex-col gap-4">
        {mode === "text" && <TextSummarizer />}
        {mode === "audio" && <AudioSummarizer />}
        {mode === "video" && <div className="text-sm">Coming soon!</div>}
        {/* {mode === "pdf" && <div className="text-sm">Coming soon!</div>} */}
      </div>
      <footer className="mt-auto text-sm text-center">
        by{" "}
        <a
          href="https://github.com/mikemklee"
          className="font-semibold hover:underline"
          target="_blank"
        >
          @mikemklee
        </a>
      </footer>
    </div>
  );
}
