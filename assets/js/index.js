import Countdown from "./countdown.js";
import createDisplay from "./element.js";

export const tempoParaoONatal = new Countdown(
  "24 December 2021 23:59:59 GMT-0300"
);

setInterval(() => {
  createDisplay();
}, 1000);
