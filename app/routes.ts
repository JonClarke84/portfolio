import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("video", "routes/video.tsx"),
  route("booking-engine", "routes/booking-engine.tsx"),
  route("about-portfolio", "routes/about-portfolio.tsx"),
] satisfies RouteConfig;
