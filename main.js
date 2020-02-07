const BASE_URL = 'https://data.cityofnewyork.us/resource/uvpi-gqnh.json';
const API_KEY = '6ipf0n3di273k61ff81k8s718';
const APP_TOKEN = '5VOV1x0FuTC7doEV49vIZUGD5';
let dataDiv = document.querySelector("#tree_data");
dataDiv.innerHTML = '';
let treeObjects = new Object();
//let treeKeys = new O();
let trees = new Set();
let treez = new Set();
let treeVals = new Object();
let treeMap = new Map();
let arbor = new Object();
let arborMap = new Map();
let wood = new Array();
let obj = {};

let response = async function () {
  await axios.get(`${BASE_URL}?$$app_token=`,
    {
      "X-App-Token": APP_TOKEN
    }).then(res => {
      Object.assign(treeObjects, res.data);
      const iterate = (treeObjects) => {
        Object.keys(treeObjects).forEach(key => {

          //console.log(`key: ${key}, value: ${treeObjects[key]}`)

          (key == 'spc_common') ? trees.add(treeObjects[key]) : null;
          (key == 'spc_latin') ? treez.add(treeObjects[key]) : null;
          //console.log(treeObjects[key]);
          //switch (key) {
          //case 'spc_common': trees.add(treeObjects[key]);
          // break;
          //case 'spc_latin': treez.add(treeObjects[key]);
          //break;
          //default: console.log([key, treeObjects[key]]);
          //}          
          console.log(treeObjects[key].size);

          if (typeof treeObjects[key] === 'object') {
            Object.assign(obj, treeObjects[key]);

            iterate(treeObjects[key]);

          }
        })
      }
      iterate(treeObjects);
      console.log(obj)
      console.log(arborMap.get("tree_id"));
      //arbor += Object.fromEntries(treeObjects);

      //console.log(arbor);

      let duir = Array.from(trees.values());
      let oak = Array.from(treez.values());
      for (let i = 0; i < duir.length; i++) {
        //console.log(duir[i]);
        treeMap.set(duir[i], oak[i]);
        dataDiv.innerHTML += `<div class="trees"><h2 id="${duir[i]}"><a href="#">${duir[i]}</a></br><h3>${oak[i]}</h3></h2><div>`;

      }
      // const reIterate = (treeObjects) => {
      //   Object.keys(treeObjects).forEach(key => {
      //     console.log(arbor);

      //     if (typeof treeObjects[key] === 'object') {
      //       reIterate(treeObjects[key]);
      //     }
      //   })
      // }
      //console.log(reIterate()); //} // console.log(treeMap)

      // for (let j = 0; j < arborMap.size; j++) {
      //console.log(arborMap.get("tree_id"));
      //}
      // arborMap.forEach(key => {
      //   console.log(arborMap[key]);

      // })
      for (let [k, v] of arborMap.entries()) {
        //console.log(...[v]);
        //(k == 'tree_id') ? console.log(...[v]) : console.log(...[k]);
        //Object.defineProperty(k, v);
        //console.log(obj);
      }
    }).catch(err => {
      console.log(err);
    })
}
response();
//function treeCategories(set) {
  //for (let i = 0; i < set.length; i++) {
    //dataDiv.innerHTML += `<p>${treez[i]}</p>`
  //}
//}