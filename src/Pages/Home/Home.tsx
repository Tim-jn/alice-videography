import "./Home.scss";
import Thumbnail from "../../Components/Thumbnail/Thumbnail";
import Banner from "../../Components/Banner/Banner";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";
import { pages } from "../../data/pages";
import Footer from "../../Components/Footer/Footer";
import BackToTop from "../../Components/BackToTop/BackToTop";
import SEO from "../../Components/SEO/SEO";
import SkipLink from "../../Components/SkipLink/SkipLink";

export default function Home() {
  return (
    <main className="home">
      <SkipLink />
      <SEO
        title="Home"
        description="Alice J. - Professional videographer based in Belgium. Specializing in music videos, corporate videos, and after movies. Creative video production across Europe."
        keywords="videography, video production, music videos, corporate videos, Belgium videographer, alice j, cinematography"
      />
      <Banner />
      <DropDownMenu />
      <BackToTop />
      <section id="main-content" className="thumbnail-gallery">
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
