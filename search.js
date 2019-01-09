var dictionary = [
  {
    "term":"cybernetics",
    "definition":"Study of control mechanisms within biological and digital systems"
  },
  {
    "term":"Agency",
    "definition":"the"
  },
  {
    "term":"Biosemiotics",
    "definition":"lines of communication with and without the natural world"
  },
  {
    "term":"Black box",
    "definition":"a component that will receive an input and produce an output through methods other than digital modeling",
  },
  {
    "term":"Making kin",
    "definition":"extending agency to the more than human."
  },
  {
      "term":"Composition",
      "definition":"developing strategies of survival within the collapsing capitalist infrastructure"
  },
  {
    "term":"More than human",
    "definition":"organisms and systems normally not assigned agency"
  },
  {
    "term":"World image",
    "definition":"internal model of the lived environment and moral landscape"
  },
  {
    "term":"Bioinformatics",
    "definition":"discipline of inscription, encoding information within biology"
  },
  {
    "term":"Computer",
    "definition":"a calculating device"
  },
  {
    "term":"World computer",
    "definition":"The world as an embodied computing device, if we were to measure the effects of the wind, nothing would model this better than the ocean"
  },
  {
    "term":"Pebble",
    "definition":"self contained, defined by its borders, a single bits"
  },
  {
    "term":"Companion species",
    "definition":"more than human being that play an important role in an individual’s life, for example dogs, animals with jobs"
  },
  {
    "term":"Hybrid systems",
    "definition":"systems comprised of both digital and biological elements"
  },
  {
    "term":"Nonlinear circuits",
    "definition":"components with functions difficult to emulate digitally, such as tube amplifiers",
  },
  {
    "term":"Deanthropocentrification",
    "definition":"a process of orienting oneself outside of anthropocentric bias"
  },
  {
    "term":"Stakeholder",
    "definition":"A constituent within a system. Recognition of stakeholdership is crucial in the recognition of agency"
  },
  {
    "term":"Translation",
    "definition":"transforming information so it is understandable to another party"
  },
  {
    "term":"Embodied computing",
    "definition":"computing where the function is not separate from the material property of the device"
  },
  {
    "term":"AI",
    "definition":"an opportunity for making kin"
  },
  {
    "term":"Indigenous computing",
    "definition":"computer language written within indigenous words and an indigenous ontology"
  },
  {
    "term":"DNA computing",
    "definition":"using the structure of DNA to encode information. A focus of bioinformatics"
  },
  {
    "term":"Energy Systems",
    "definition":"the grids and energy exchanges that allow networks and servers to function. A Key structure in the global communication assemblage",
  },
  {
    "term":"Blockchain",
    "definition":"a distributed protocol that does not require trusted actors as participants"
  },
  {
    "term":"Network",
    "definition":"a systems of nodes engaged in communication"
  },
  {
    "term":"Assemblage",
    "definition":"a complex system require disparate systems to work in coperation in order to function"
  },
  {
    "term":"Ecosystem",
    "definition":"an assemblage of biological constituents"
  },
  {
    "term":"Natureculture",
    "definition":"the combined social and biological legacies held by individuals and societies"
  },
  {
    "term":"Economy",
    "definition":"networked exchanges of energy"
  },
  {
    "term":"Corporation",
    "definition":"a more than human participant in the economy"
  },
  {
    "term":"DAO",
    "definition":"a blockchain organization capable of autonomous transactions"
  },
  {
    "term":"Climate change",
    "definition":"the man made process altering the climate"
  },
  {
    "term":"Cyborg",
    "definition":"a hybrid assemblage containing human and more than human components"
  },
  {
    "term":"Ontology",
    "definition":"the understanding of relationship and the way one fits within"
  },
  {
    "term":"Biology",
    "definition":"the study of more than human systems"
  },
  {
    "term":"Stack",
    "definition":"the global assemeledge of communication, energy and other network infrastructure"
  },
  {
    "term":"Infrastructure",
    "definition":"the defining components of an economy, the most viable places of recomposition",
  },
  {
    "term":"Hack",
    "definition":"to illegally alter the modality of a network"
  },
  {
    "term":"Localize",
    "definition":"to adapt a system to a particular biome"
  },
  {
    "term":"Fork",
    "definition":"to break away a layer of protocol in order to alter it"
  },
  {
    "term":"Adjacent",
    "definition":"the location of all possible conditions"
  },
  {
    "term":"Biodiversity",
    "definition":"a measure of the health of an ecosystem"
  },
  {
    "term":"Policy",
    "definition":"Space of codification, determining agency and stakeholdership. An important place of recomposition"
  },
  {
    "term":"Finance",
    "definition":"the medium of the economy"
  },
  {
    "term":"Viability",
    "definition":"the ability of a system to adapt to changing circumstance"
  },
  {
    "term":"Variability",
    "definition":"the diversity of responses available to a system in adapting to change"
  },
  {
    "term":"Turing complete",
    "definition":"a function with the property of being fully supported across any computing language"
  },
  {
    "term":"Orientation",
    "definition":"ones placement within an ontology"
  },
  {
    "term":"Server",
    "definition":"a device casting within a specific protocol layer to others within the same layer"
  },
  {
    "term":"user",
    "definition":"arbitrary deffinition here"
  },
  {
    "term":"system",
    "definition":"need a deffinition"
  },
  {
    "term":"tree",
    "definition":"a stakeholder"
  }
];

var itnum;
var elems = document.querySelectorAll('p,li,h1,h2,h3,h4,tr,a'), i = 0;

/*Itterates through terms selecting terms and definitions*/
for(var i = 0; i < dictionary.length; i++){
  var myWord = dictionary[i].term;
  var myDef = dictionary[i].definition;
  replaceText(myDef, myWord, 'g');
}


/*this function replaces terms with terms plus definitions wrapped in an abbr element*/
function replaceText(text, myTerm, flags) {
  var termMatch = new RegExp(myTerm, flags);

  for (; i < elems.length; i++){
    if (!elems[i].childNodes.length)
      var zip;//for some reason this function won't work without a line here
      elems[i].innerHTML = elems[i].innerHTML.replace(termMatch, '<abbr id="popdef'+i+'"title="'+text+'">'+myTerm+'</abbr>');
  }
}

/*this function injects the abbr element into a window*/

var myselect = document.querySelectorAll("[id*='popdef']"), i = 0;
for (; i < myselect.length; i++) {
  myselect[i].onmouseenter = function() {mouseEnter()};


}

function mouseEnter() {
  //having trouble with the selector
  myselect[i].style.color = "red";
  console.log("hello?"+i);
}
