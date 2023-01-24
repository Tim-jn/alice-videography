import "./Home.scss";
import Thumbnail from "../../Components/Thumbnail/Thumbnail";
import { data } from "../../data/data";

type DataProps = {
  id: number;
  title: string;
};

export default function Home() {
  return (
    <section className="thumbnail-gallery">
      {data.map(({ id, title }: DataProps) => {
        return <Thumbnail title={title} />;
      })}
    </section>
  );
}
