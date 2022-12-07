import Login from "../pages/Login";
import JanitorMcp from "../pages/JanitorMcp";
import CollectorVehicles from "../pages/CollectorVehicles";
import DriverRoute from "../pages/DriverRoute";
const routes = [
  {
    component: Login,
    path: "/login",
  },
  {
    component: JanitorMcp,
    path: "/janitor_mcp",
  },
  {
    component: CollectorVehicles,
    path: "/collector_vehicles",
  },
  {
    component: DriverRoute,
    path: "/driver_route",
  },
];
export default routes;
