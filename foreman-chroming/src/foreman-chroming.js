import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

function domElementGetter() {
  let el = document.getElementById("foreman-chroming");
  if (!el) {
    el = document.createElement("div");
    el.id = "foreman-chroming";
    document.body.appendChild(el);
  }

  return el;
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter
});

export const { bootstrap } = lifecycles;
export const { mount } = lifecycles;
export const { unmount } = lifecycles;
