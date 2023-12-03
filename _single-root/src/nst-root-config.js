import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
    activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@nst/react-first",
  app: () =>
    System.import("@nst/react-first"),
  activeWhen: (location) => location.pathname ==="/react-first",
});

start({
  urlRerouteOnly: true,
});
