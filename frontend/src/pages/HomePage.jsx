import { useHomeCatalog } from "../hooks/useHomeCatalog";
import { HomeHero } from "../components/HomeHero";
import { TrustStrip } from "../components/TrustStrip";

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
      <TrustStrip />
    </div>
  );
}

export default HomePage;
