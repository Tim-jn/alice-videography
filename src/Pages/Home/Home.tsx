import "./Home.scss";
import Thumbnail from "../../Components/Thumbnail/Thumbnail";
import Banner from "../../Components/Banner/Banner";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";
import { pages } from "../../data/pages";
import Footer from "../../Components/Footer/Footer";
import BackToTop from "../../Components/BackToTop/BackToTop";

export default function Home() {
  return (
    <main className="home">
      <Banner />
      <DropDownMenu />
      <BackToTop />
      <section className="thumbnail-gallery">
        {pages.map(({ id, title, url, background }) => {
          return (
            <Thumbnail
              key={id}
              title={title}
              url={url}
              background={background}
            />
          );
        })}
      </section>
      <Footer />
    </main>
  );
}
