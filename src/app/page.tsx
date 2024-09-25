"use client";

import { LoremIpsum } from "lorem-ipsum";
import { useEffect, useState } from "react";

export default function Home() {
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: { max: 8, min: 4 },
      wordsPerSentence: { max: 16, min: 4 },
    });
    setParagraph(lorem.generateParagraphs(1));
  }, []);

  return (
    <div className="flex flex-col pt-40 px-12 gap-6">
      <h1 className="text-6xl">Projeto inicial</h1>
      <p>{paragraph}</p>
    </div>
  );
}
