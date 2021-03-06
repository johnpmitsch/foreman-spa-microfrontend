# Foreman SPA with single-spa microfrontends

This repo contains multiple Single-Page-Applications (SPA) that work together with [single-spa](https://single-spa.js.org/)

## Getting Started

Applications must be built if they are local. These can be used from the npm registry as well, but as of this writing they are not published.

For root-config:

- In every application but the `root-config`, `npm run build` in the application's directory
- In root config, `cp plugings.js.example plugins.js`
- cd to `root-config` and `npm i`

Then:
- Run `npm start` in `root-config`
- Navigate to `https://localhost:9000`
- Test out a Foreman route such as `https://localhost:9000/hosts` or a Katello one such as `https://localhost:9000/content_views`

You must run root-config and chroming, but can only run katello or foreman-core application as long as you navigate to the running applications routes. For example, if I was working on Katello by itself, I can start root-config, foreman-chroming, and Katello and then navigate to `/content_views`. This will be the same for additional plugins.

## Applications

- root-config: Contains the single-spa configuration details and routing logic for the applications.
- foreman-chroming: The menus and chroming elements that will consistently show on every page
- foreman-core: Foreman-core UI pages that will show for Foreman routes
- katello: Katello pages that will show for Katello routes
