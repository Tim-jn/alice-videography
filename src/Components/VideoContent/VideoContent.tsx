import "./VideoContent.scss";

type Props = {
  title: string;
  url: string;
  text: string[];
};

export default function VideoContent({ title, url, text }: Props) {
  return (
    <div className="video-content">
      <iframe
        loading="lazy"
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      ></iframe>
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
