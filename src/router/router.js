import LibraryPage from "@pages/libraryPage/LibraryPage";
import ShopPage from "@pages/shopPage/ShopPage";
import StatsPage from "@pages/statsPage/StatsPage";
import AchievementsPage from "@pages/achievementsPage/AchievementsPage";
import InfoPage from "@pages/infoPage/InfoPage";
import SettingsPage from "@pages/settingsPage/SettingsPage"


export const appRoutes = [
  { path: "/", component: LibraryPage, title: "Библиотека" },
  { path: "/shop", component: ShopPage, title: "Магазин" },
  { path: "/stats", component: StatsPage, title: "Статистика" },
  { path: "/achievements", component: AchievementsPage, title: "Достижения" },
  { path: "/info", component: InfoPage, title: "Информация" },
  { path: "/settings", component: SettingsPage, title: "Настройки" },
]