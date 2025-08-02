import React, { useState, useEffect } from "react";
import { Container, Logo } from "../components";
import appwriteService from "../appwrite/appwrite_config";

function Home() {
  // Typewriter animation for heading
  const fullText = "Welcome to Write Up";
  const [typedText, setTypedText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTypedText("");
    setShowSubtitle(false);
    setCurrentIndex(0);
  }, [fullText]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else if (currentIndex === fullText.length) {
      const timeout = setTimeout(() => setShowSubtitle(true), 400);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Optional: Hero image background, can be replaced with your own image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80"
          alt="Landing background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 opacity-80" />
      </div>
      <Container>
        <div className="relative z-10 mx-auto max-w-2xl text-center p-10 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-6 min-h-[3.5rem]">
            {typedText}
            <span className="text-purple-300">
              {typedText.includes("Write Up") && ""}
            </span>
            <span className="border-r-2 border-purple-300 animate-pulse ml-1" />
          </h1>
          <p
            className={`text-lg sm:text-xl text-blue-100 font-medium mb-8 transition-all duration-700 ease-out ${
              showSubtitle
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            }`}
            style={{ transitionDelay: showSubtitle ? "0.1s" : "0s" }}
          >
            A space where ideas come alive, stories unfold, and curiosity finds
            its voice.
            <br />
            From personal reflections to insightful perspectives, this blog is
            your escape into words that matter.
            <br />
            Dive in, explore, and let your mind wander — one post at a time.
          </p>
          {/* Placeholder for a hero/landing image or illustration */}
          <div className="flex justify-center mt-8">
            <img
              src="src\assets\logo.png"
              alt="Creative writing illustration"
              className="w-48 h-48 object-contain rounded-2xl shadow-lg border-4 border-white/30 bg-white/10"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home;
