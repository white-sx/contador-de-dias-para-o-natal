import Countdown from "./countdown.js";
import { tempoParaoONatal } from "./index.js";

export default function createDisplay() {
  const display = document.querySelector("#display");
  let d = tempoParaoONatal.total.days;
  let h = tempoParaoONatal.total.hours;
  let m = tempoParaoONatal.total.minutes;
  let s = tempoParaoONatal.total.seconds;

  display.innerHTML = `${d} dias : ${h}h : ${m}m : ${s}s`;
}
