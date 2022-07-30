export const types = [
  { _id: "1", name: "Arbol" },
  { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
  { _id: "3", name: "Carolina Reaper" },
  { _id: "4", name: "Cayenne" },
  { _id: "5", name: "Chipotle" },
  { _id: "6", name: "Datil" },
  { _id: "7", name: "Fatalii" },
  { _id: "8", name: "Fresno" },
  { _id: "9", name: "Guajillo" },
  { _id: "10", name: "Habanero" },
  { _id: "11", name: "Jalapeño" },
  { _id: "12", name: "Naga Morich" },
  { _id: "13", name: "Peri Peri" },
  { _id: "14", name: "Piquin" },
  { _id: "15", name: "Red Savina" },
  { _id: "16", name: "Scotch Bonnet" },
  { _id: "17", name: "Serrano" },
  { _id: "18", name: "Tabasco" },
  { _id: "19", name: "Thai" },
  { _id: "20", name: "Trinidad Scorpion" },
  { _id: "21", name: "Peppers blend" }
];

export function getTypes() {
  return types.filter(t => t);
}
