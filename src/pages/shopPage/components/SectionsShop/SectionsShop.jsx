import ShopImprovements from "../ShopImprovements/ShopImprovements";
import ShopEducation from "../ShopEducation/ShopEducation";

export default function SectionsShop() {
  return (
    <div className="pageShopSections">
      <ShopEducation />
      <ShopImprovements />
    </div>
  );
}
