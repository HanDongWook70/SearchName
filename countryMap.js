import transNameiso from "./transNameiso.js";

export default function countryMap(userCountry) {
  var xhr = new XMLHttpRequest();
  var url =
    "http://apis.data.go.kr/1262000/CountryMapService2/getCountryMapList2"; /*URL*/
  var queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=" +
    "HqxUpabRIyVQVGtErsnsVjw3%2BOEZKdTJfxNOWu%2BUigQSs4%2Fq6dnGPDumtHLY%2BDIFGfPU1FTCZr2mlbHrqk19Jw%3D%3D"; /*Service Key*/
  queryParams +=
    "&" +
    encodeURIComponent("returnType") +
    "=" +
    encodeURIComponent("JSON"); /**/
  queryParams +=
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("cond[country_nm::EQ]") +
    "=" +
    encodeURIComponent(transNameiso(userCountry)); /**/
  queryParams +=
    "&" +
    encodeURIComponent("cond[country_iso_alp2::EQ]") +
    "=" +
    encodeURIComponent(userCountry); /**/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("10"); /**/
  xhr.open("GET", url + queryParams);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      console.log(JSON.parse(this.response));
    }
  };

  xhr.send("");
}
