import "./Home.scss";
import Thumbnail from "../../Components/Thumbnail/Thumbnail";
import Banner from "../../Components/Banner/Banner";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";
import { data } from "../../data/data";

export default function Home() {
  return (
    <>
      <Banner />
      <DropDownMenu />
      <section className="thumbnail-gallery">
        {data.map(({ id, title, url }) => {
          return <Thumbnail key={id} title={title} url={url} />;
        })}
      </section>
    </>
  );
}
