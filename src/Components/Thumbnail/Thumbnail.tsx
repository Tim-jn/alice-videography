import "./Thumbnail.scss";

type Props = {
  title: string;
};

export default function Thumbnail({ title }: Props) {
  return (
    <div className="thumbnail">
      <h2 className="thumbnail-title">{title}</h2>
    </div>
  );
}
