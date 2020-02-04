const BASE_URL = 'https://data.cityofnewyork.us/resource/uvpi-gqnh.json';
const API_KEY = '6ipf0n3di273k61ff81k8s718';
const APP_TOKEN = '5VOV1x0FuTC7doEV49vIZUGD5';

let response = async function () {
  await axios.get(`${BASE_URL}?$$app_token=`,
    {
      "X-App-Token": APP_TOKEN
    }).then(res => {
      const treeCategories = res.data;
      console.log(treeCategories);
      for (let i = 0; i < treeCategories.length; i++) {
        console.log(treeCategories[i].spc_common);
        //dropDown.innerHTML += `<option id=${treeCategories[i].id}>${catCategories[i].name}</option>`;
      }
    }).catch(err => {
      console.log(err);
    })
}
response()