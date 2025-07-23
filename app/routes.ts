import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
  layout("routes/Common.tsx", [
    index("routes/Home.tsx"),
    // route("about", "routes/About.tsx"),
  ]),
] satisfies RouteConfig;

