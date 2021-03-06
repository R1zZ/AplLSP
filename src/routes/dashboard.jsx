import Dashboard from "views/Dashboard/Dashboard";
import Admin from "views/Admin/Admin";
import Asesor from "views/Asesor/Asesor";
import Asesmen from "views/Asesmen/Asesmen";
import SoalCBT from "views/SoalCBT/SoalCBT";
import TUK from "views/TUK/TUK";
import Applicant from "views/Applicant/Applicant";
import Sertifikasi from "views/Sertifikasi/Sertifikasi";

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
  { path: "/TUK", name: "TUK", icon: "pe-7s-map-marker", component: TUK },
  {
    path: "/Applicant",
    name: "Applicant",
    icon: "pe-7s-bell",
    component: Applicant
  },
  {
    path: "/Sertifikasi",
    name: "Sertifikasi",
    icon: "pe-7s-id",
    component: Sertifikasi
  },
  { redirect: true, path: "/", to: "/Dashboard", name: "Dashboard" }
];

export default DashboardRoutes;
