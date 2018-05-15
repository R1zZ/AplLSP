import Dashboard from "views/Dashboard/Dashboard";
import Admin from "views/Admin/Admin";
import TUK from "views/TUK/TUK";
import Applicant from "views/Applicant/Applicant";
import Icons from "views/Icons/Icons";
import Maps from "views/Maps/Maps";
import Notifications from "views/Notifications/Notifications";

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
    path: "/tuk",
    name: "TUK",
    icon: "pe-7s-note2",
    component: TUK
  },
  {
    path: "/applicant",
    name: "Applicant",
    icon: "pe-7s-news-paper",
    component: Applicant
  },
  { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications
  },
  { redirect: true, path: "/", to: "/Dashboard", name: "Dashboard" }
];

export default DashboardRoutes;
