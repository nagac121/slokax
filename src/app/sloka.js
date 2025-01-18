import React, { useEffect, useState } from "react";

const Sloka = ({ fileName }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/slokas/${fileName}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Failed to fetch slokam content:", error);
        setContent("Failed to load content.");
      }
    };

    fetchContent();
  }, [fileName]);

  return (
    <div>
      <pre>{content}</pre>
    </div>
  );
};

export default Sloka;
