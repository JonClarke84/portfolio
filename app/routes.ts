import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("video", "routes/video.tsx"),
  route("holiday-extras", "routes/holiday-extras.tsx"),
  route("about-portfolio", "routes/about-portfolio.tsx"),
  route("experience", "routes/experience.tsx"),
] satisfies RouteConfig;
