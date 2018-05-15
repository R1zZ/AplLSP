import Dashboard from "views/Dashboard/Dashboard";
import Admin from "views/Admin/Admin";
import Asesor from "views/Asesor/Asesor";
import Asesmen from "views/Asesmen/Asesmen";
import SoalCBT from "views/SoalCBT/SoalCBT";
import Tuk from "views/Tuk/Tuk";
import Applicant from "views/Applicant/Applicant";

const DashboardRoutes = [
  {
    path: "/Dashboard",
    name: "Home",
    icon: "pe-7s-home",
    component: Dashboard
  },
  {
    path: "/admin",
    name: "Admin",
    icon: "pe-7s-user",
    component: Admin
  },
  {
    path: "/Asesor",
    name: "Asesor",
    icon: "pe-7s-note2",
    component: Asesor
  },
  {
    path: "/Asesmen",
    name: "Asesmen",
    icon: "pe-7s-news-paper",
    component: Asesmen
  },
  { path: "/SoalCBT", name: "Soal CBT", icon: "pe-7s-science", component: SoalCBT },
  { path: "/Tuk", name: "Tuk", icon: "pe-7s-map-marker", component: Tuk },
  {
    path: "/Applicant",
    name: "Applicant",
    icon: "pe-7s-bell",
    component: Applicant
  },
  { redirect: true, path: "/", to: "/Dashboard", name: "Dashboard" }
];

export default DashboardRoutes;
