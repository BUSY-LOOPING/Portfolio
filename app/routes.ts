import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/Common.tsx", [
    index("routes/Home.tsx"),
    route("process", "routes/Process.tsx"),
    route("rates", "routes/Rates.tsx"),
  ]),
] satisfies RouteConfig;

