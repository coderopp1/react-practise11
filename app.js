const root=ReactDOM.createRoot(document.getElementById("root"));
const heading =React.createElement("h2",{id:"heading"},[
React.createElement("h2",{id:"heading"}," hello from aru side"),
React.createElement("h2",{id:"heading"}," hello from aru side")   // passing a n arrray of children as the the third prop
]);
root.render(heading);