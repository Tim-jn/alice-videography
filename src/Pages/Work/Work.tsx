import { useState, useEffect } from "react";
import BackToTop from "../../Components/BackToTop/BackToTop";
import Banner from "../../Components/Banner/Banner";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";
import Footer from "../../Components/Footer/Footer";
import VideoContent from "../../Components/VideoContent/VideoContent";
import VideoFilter from "../../Components/VideoFilter/VideoFilter";
import { work } from "../../data/work";
import SEO from "../../Components/SEO/SEO";
import SkipLink from "../../Components/SkipLink/SkipLink";
import "./Work.scss";

const FILTER_STORAGE_KEY = "alice-videography-filter";

export default function Work() {
  // Récupérer le filtre sauvegardé ou utiliser "all" par défaut
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const savedFilter = localStorage.getItem(FILTER_STORAGE_KEY);
    return savedFilter || "all";
  });

  // Sauvegarder le filtre dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem(FILTER_STORAGE_KEY, selectedCategory);
  }, [selectedCategory]);

  const filteredWork =
    selectedCategory === "all"
      ? work
      : work.filter((video) => video.category === selectedCategory);

  return (
    <main className="work">
      <SkipLink />
      <SEO
        title="Work"
        description="Explore Alice J.'s portfolio of music videos, corporate videos, and after movies. Creative videography work with Young Enough, Pool Party Chicks, and Alcatraz Metal Festival."
        keywords="music videos, corporate videos, video portfolio, Belgium videographer, after movies, event videography"
        type="website"
      />
      <Banner />
      <DropDownMenu />
      <BackToTop />
      <VideoFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <section id="main-content" className="work-content">
        {filteredWork
          .sort((a, b) => b.id - a.id)
          .map(({ id, title, url, text }) => {
            return (
              <VideoContent key={id} title={title} url={url} text={text} />
            );
          })}
      </section>
      <Footer />
    </main>
  );
}
