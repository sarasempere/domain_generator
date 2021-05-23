/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/domain.png";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  domain(pronoun, adj, noun, extension);
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "ofus", "racom"];
let extension = ["es", "com", "net", "io", "us"];

function domain(pronoun, adj, noun, extension) {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          let long = extension[l].length;
          let newNoun = noun[k].substring(
            noun[k].length - long,
            noun[k].length
          );

          let newDomain = "";
          if (extension[l] == newNoun) {
            let actNoun = noun[k].substring(0, noun[k].length - long);
            newDomain = pronoun[i] + adj[j] + actNoun + "." + extension[l];
            console.log(newDomain);
          } else {
            newDomain = pronoun[i] + adj[j] + noun[k] + "." + extension[l];
            console.log(newDomain);
          }

          let lista = document.getElementById("domain");
          let newLi = document.createElement("li");
          let contenido = document.createTextNode(newDomain);
          lista.appendChild(newLi);
          newLi.appendChild(contenido);
        }
      }
    }
  }
}
