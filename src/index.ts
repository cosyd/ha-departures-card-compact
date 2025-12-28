import { DeparturesCard } from "./departures-card";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

customElements.define("departures-card-compact", DeparturesCard);


window.customCards = window.customCards || [];
window.customCards.push({
  type: "departures-card-compact",
  name: "Departures Card Compact",
  description: "Show public transport departures",
});