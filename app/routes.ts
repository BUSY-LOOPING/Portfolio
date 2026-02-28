import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/Common.tsx", [
    index("routes/Home.tsx"),
    route("work", "routes/Work.tsx"),
    route("rates", "routes/Rates.tsx"),
    route("contact", "routes/Contact.tsx"),
  ]),
] satisfies RouteConfig;

