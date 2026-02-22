import { work } from "../../data/work";
import "./VideoFilter.scss";

interface VideoFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

// Fonction pour formater le nom de la catégorie
const formatCategoryLabel = (category: string): string => {
  return category
    .split("-")
    .map((word) => word)
    .join(" ");
};

export default function VideoFilter({
  selectedCategory,
  onCategoryChange,
}: VideoFilterProps) {
  // Extraire les catégories uniques depuis work.js
  const uniqueCategories = Array.from(
    new Set(work.map((video) => video.category))
  ).sort();

  // Créer la liste des catégories avec "All" en premier
  const categories = [
    { value: "all", label: "all" },
    ...uniqueCategories.map((cat) => ({
      value: cat,
      label: formatCategoryLabel(cat),
    })),
  ];

  return (
    <div className="video-filter">
      <div className="video-filter__buttons">
        {categories.map((category) => (
          <button
            key={category.value}
            className={`video-filter__button ${
              selectedCategory === category.value
                ? "video-filter__button--active"
                : ""
            }`}
            onClick={() => onCategoryChange(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
