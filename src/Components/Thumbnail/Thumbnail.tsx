import "./Thumbnail.scss";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  url: string;
  background: string;
};

export default function Thumbnail({ title, url, background }: Props) {
  return (
    <Link className="thumbnail" to={url}>
      <img src={background} alt={title} />
      <h2 className="thumbnail-title">{title}</h2>
    </Link>
  );
}
