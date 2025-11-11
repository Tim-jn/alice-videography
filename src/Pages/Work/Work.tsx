import { useState } from "react";
import BackToTop from "../../Components/BackToTop/BackToTop";
import Banner from "../../Components/Banner/Banner";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";
import Footer from "../../Components/Footer/Footer";
import VideoContent from "../../Components/VideoContent/VideoContent";
import VideoFilter from "../../Components/VideoFilter/VideoFilter";
import { work } from "../../data/work";
import "./Work.scss";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredWork =
    selectedCategory === "all"
      ? work
      : work.filter((video) => video.category === selectedCategory);

  return (
    <main className="work">
      <Banner />
      <DropDownMenu />
      <BackToTop />
      <VideoFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <section className="work-content">
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
