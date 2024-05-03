/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let domains = [".com", ".net", ".us", ".io"];

  for (let pronoun in pronouns) {
    for (let adj in adjs) {
      for (let noun in nouns) {
        for (let domain in domains) {
          console.log(
            pronouns[pronoun] + adjs[adj] + nouns[noun] + domains[domain]
          );
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
