"use client";

import { useState } from "react";
import useLenis from "@/hooks/useLenis";
import LoadingScreen from "@/components/sections/LoadingScreen";
import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import Gallery from "@/components/sections/Gallery";
import LoveCounter from "@/components/sections/LoveCounter";
import Reasons from "@/components/sections/Reasons";
import HeartGarden from "@/components/sections/HeartGarden";
import SecretLetters from "@/components/sections/SecretLetters";
import Promises from "@/components/sections/Promises";
import FinalLetter from "@/components/sections/FinalLetter";
import FinalSurprise from "@/components/sections/FinalSurprise";
import Ending from "@/components/sections/Ending";
import MusicPlayer from "@/components/ui/MusicPlayer";
import MusicSection from "@/components/sections/MusicSection";

export default function Home() {
  useLenis();

  const [loadingFinished, setLoadingFinished] =
    useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden">

      {!loadingFinished && (
        <LoadingScreen
          onFinish={() => setLoadingFinished(true)}
        />
      )}

      {loadingFinished && (
<>
  <MusicPlayer />
  <Hero />
  <MusicSection />
  <Timeline />
  <Gallery />
  <LoveCounter />
  <Reasons />
  <HeartGarden />
  <SecretLetters />
  <Promises />
  <FinalLetter />
  <FinalSurprise />
  <Ending />
</>
)}

    </main>
  );
}