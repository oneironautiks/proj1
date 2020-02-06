const BASE_URL = 'https://data.cityofnewyork.us/resource/uvpi-gqnh.json';
const API_KEY = '6ipf0n3di273k61ff81k8s718';
const APP_TOKEN = '5VOV1x0FuTC7doEV49vIZUGD5';
let dataDiv = document.querySelector("#tree_data");
dataDiv.innerHTML = '';
let treeObjects = new Object();
let trees = new Array();

// function generateSuccessHTMLOutput(response) {
//   return '<h4>Result</h4>' +
//     // '<h5>Data:</h5> ' +
//     // '<pre>' + response.data + ' ' + response.dataText + '</pre>' +
//     //'<h5>Headers:</h5>' +
//     //'<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
//     '<h5>Data:</h5>' +
//     '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
// }

let response = async function () {
  await axios.get(`${BASE_URL}?$$app_token=`,
    {
      "X-App-Token": APP_TOKEN
    }).then(res => {
      Object.assign(treeObjects, res.data);
      //console.log(treeObjects);
      const iterate = (treeObjects) => {
        Object.keys(treeObjects).forEach(key => {

          //console.log(`key: ${key}, value: ${treeObjects[key]}`)
          console.log(treeObjects[key]);
          //trees.push(`key: ${key}, value: ${treeObjects[key]}`);
          if (typeof treeObjects[key] === 'object') {
            iterate(treeObjects[key])
          }
        })
      }
      console.log(iterate(treeObjects));

      //console.log(trees);

      //for (let i = 0; i < treeObjects.length; i++) {
      //dataDiv.innerHTML += `<p>${treeObjects[i].tree_id}</br>${treeObjects[i].spc_common}</p>`;

      //console.log(treeObjects[i]);
      //trees.push(treeObjects[i]);
      //for (let j = 0; j < trees.length; j++) {
      //console.log(Object.entries(trees[j]));
      //}
      //let treez = new String(trees.spc_common);
      //console.log(treez);
      //let name = Object.values(treeObjects[i]);
      //console.log(treeObjects[i].spc_common);
      //let maples = /maple/;
      //console.log(trees.matchAll(maples))
      //console.log(redMaple.test(treeObjects[i].spc_common));
      // let norMaple = /Norway maple/;
      // console.log(norMaple.test(treeObjects[i].spc_common));
      //}
      //let name = treeObjects.forEach().map(a => a.spc_common);
      //trees.push(name);
      //console.log(trees.values());
      //console.log(treeObjects);
      //for (const [index, element] of treeObjects.entries('spc_common')) {
      // console.log(index, element);
      //}
      //for (const prop in treeObjects) {
      //const info = Object.entries(treeObjects[prop]);
      // console.log(info.values);
      //for (const index in info) {
      //console.log(info[index].spc_common);
      //}
      //trees.add(treeObjects[prop].spc_common);
      //console.log(Object.values(treeObjects[prop]));

      //}
      //console.log(trees);
      //for (let name of trees) {
      //console.log(name);
      // dataDiv.innerHTML += `<div><a href="#">${name}</a></div>`;
      //}
    }).catch(err => {
      console.log(err);
    })
}
response()

function treeCategories(set) {
  for (let i = 0; i < set.length; i++) {
    dataDiv.innerHTML += `<p>${treez[i]}</p>`
  }
}