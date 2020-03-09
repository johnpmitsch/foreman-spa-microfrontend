import { registerApplication, start } from "single-spa";

const FOREMAN_PAGES = ["/hosts", "/audits"];
const KATELLO_PAGES = ["/content_views", "/subscriptions", "/repositories"];

registerApplication(
  "foreman-chroming",
  () => import("foreman-test-ui-chroming"),
  location => location.pathname.startsWith("/")
);

//registerApplication(
//  "foreman-core",
//  () => import("foreman-test-ui-core"),
//  location => FOREMAN_PAGES.includes(location.pathname)
//);
//
//registerApplication(
//  "foreman-katello",
//  () => import("foreman-test-ui-katello"),
//  location => KATELLO_PAGES.includes(location.pathname)
//);

start();
