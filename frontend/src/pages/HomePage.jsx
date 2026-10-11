import { useHomeCatalog } from "../hooks/useHomeCatalog";
import { HomeHero } from "../components/HomeHero";

function HomePage() {
  const {
    products,
    categories,
    categoryChipsLoading,
    categoryFilter,
    error,
    loadingCategories,
    loadingList,
    setCategory,
  } = useHomeCatalog();
  return (
    <div className="space-y-12">
      <HomeHero categories={categories} loadingCategories={loadingCategories} />
    </div>
  );
}

export default HomePage;
