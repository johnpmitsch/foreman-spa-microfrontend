import { registerApplication, start } from "single-spa";

const FOREMAN_PAGES = [
  '/hosts',
  '/audits',
]
const KATELLO_PAGES = [
  '/content_views',
  '/subscriptions',
  '/repositories',
]

registerApplication(
  "@foreman/chroming",
  () => System.import("@foreman/chroming"),
  location => location.pathname.startsWith('/')
);

registerApplication(
  "@foreman/core",
  () => System.import("@foreman/core"),
  location => FOREMAN_PAGES.includes(location.pathname)
)

registerApplication(
  "@foreman/katello",
  () => System.import("@foreman/katello"),
  location => KATELLO_PAGES.includes(location.pathname)
)

start();
