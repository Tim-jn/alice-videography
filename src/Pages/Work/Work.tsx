import Banner from "../../Components/Banner/Banner";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";
import VideoContent from "../../Components/VideoContent/VideoContent";
import { work } from "../../data/work";
import "./Work.scss";

export default function Work() {
  return (
    <>
      <Banner />
      <DropDownMenu />
      <section className="work-content">
        {work.map(({ id, title, url }) => {
          return <VideoContent key={id} title={title} url={url} />;
        })}
      </section>
    </>
  );
}
