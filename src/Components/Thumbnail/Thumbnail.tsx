import "./Thumbnail.scss";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  url: string;
};

export default function Thumbnail({ title, url }: Props) {
  return (
    <Link className="thumbnail" to={url}>
      <h2 className="thumbnail-title">{title}</h2>
    </Link>
  );
}
