import { useState, useEffect, useRef } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import "./VideoContent.scss";

type Props = {
  title: string;
  url: string;
  text: string[];
};

// Fonction pour extraire l'ID de la vidéo YouTube depuis l'URL
const getYoutubeVideoId = (url: string): string => {
  const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
};

export default function VideoContent({ title, url, text }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer pour le lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", // Commence à charger 200px avant que la vidéo soit visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Timeout de sécurité pour masquer le loader après 10 secondes
  useEffect(() => {
    if (shouldLoad) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [shouldLoad]);

  const videoId = getYoutubeVideoId(url);

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "400",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  const onReady = () => {
    setIsLoading(false);
  };

  return (
    <div className="video-content" ref={containerRef}>
      <div className="video-container">
        {isLoading && shouldLoad && (
          <div className="video-loader">
            <div className="spinner"></div>
          </div>
        )}
        {shouldLoad && (
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
            title={title}
            className={isLoading ? "video-loading" : "video-loaded"}
          />
        )}
        {!shouldLoad && <div className="video-placeholder"></div>}
      </div>
      <div className="video-text">
        <h2 className="video-title">{title}</h2>
        <p className="video-credits">
          {text[0]}
          <br />
          {text[1]}
          <br />
          {text[2]}
        </p>
      </div>
    </div>
  );
}
