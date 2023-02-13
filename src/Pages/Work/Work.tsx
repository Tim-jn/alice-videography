import BackToTop from "../../Components/BackToTop/BackToTop";
import Banner from "../../Components/Banner/Banner";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";
import Footer from "../../Components/Footer/Footer";
import VideoContent from "../../Components/VideoContent/VideoContent";
import { work } from "../../data/work";
import "./Work.scss";

export default function Work() {
  return (
    <main className="work">
      <Banner />
      <DropDownMenu />
      <BackToTop />
      <section className="work-content">
        {work.map(({ id, title, url, text }) => {
          return <VideoContent key={id} title={title} url={url} text={text} />;
        })}
      </section>
      <Footer />
    </main>
  );
}
