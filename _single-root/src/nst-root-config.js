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
    activeWhen: (location) => location.pathname === "/react-first",
});

registerApplication({
  name: "@nst/react-header",
  app: () =>
    System.import("@nst/react-header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@nst/react-router",
  app: () =>
    System.import("@nst/react-router"),
  activeWhen: ["/react-router"]
});

start({
  urlRerouteOnly: true,
});
