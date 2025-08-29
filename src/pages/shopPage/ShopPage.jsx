import StatsShop from "@pages/shopPage/components/StatsShop/StatsShop";
import SectionsShop from "./components/SectionsShop/SectionsShop";

export default function ShopPage() {
  return (
    <div className="page pageShop">
      <div className="container-content">
        <h1>Магазин</h1>
        <StatsShop />
        <SectionsShop />
      </div>
    </div>
  );
}
