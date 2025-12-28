import { DeparturesCard } from "./departures-card";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

customElements.define("ha-departures-card-compact", DeparturesCard);


window.customCards = window.customCards || [];
window.customCards.push({
  type: "ha-departures-card-compact",
  name: "Departures Card Compact",
  description: "Show public transport departures",
});