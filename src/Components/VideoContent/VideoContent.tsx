import "./VideoContent.scss";

type Props = {
  title: string;
  url: string;
};

export default function VideoContent({ title, url }: Props) {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero
          ipsam nisi? Magni, asperiores voluptas eos laboriosam repellat
          obcaecati inventore ut incidunt, tenetur, nisi velit laborum sequi
          consectetur doloribus unde?
        </p>
      </div>
    </div>
  );
}
