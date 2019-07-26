var emptyArr;
var reqComp;
function setData(jsonData, compArray) {
  reqComp = compArray;
  emptyArr = [];
  var data = getModifiedJSON([
    { components: JSON.parse(JSON.stringify(jsonData)) }
  ]);
  return `<textarea style="width:100%; height: 250px;">
  ${JSON.stringify(data)}
</textarea>`;
}

function getJSON(json_data, compArray) {
  return setData(json_data, compArray);
}

function getModifiedJSON(json_data) {
  var array;
  splitJSON(json_data, function(data) {
    array = data;
  });
  return array;
}

function splitJSON(json_arr, callback) {
  var arr = json_arr;
  for (var i in arr) {
    var jsonarr = arr[i];
    if (jsonarr["components"].length <= 0) {
      fixComponent(jsonarr["components"], function(getAll) {
        emptyArr.push(getAll);
      });
    } else {
      fixComponent(jsonarr["components"], function(getAll) {
        emptyArr.push(getAll);
      });
      splitJSON(jsonarr["components"], callback);
      return;
    }
  }
  callback(emptyArr);
}

function fixComponent(arr, callback) {
  for (var i in arr) {
    fixStaticComp(arr[i], function(getObj) {
      callback(getObj);
    });
  }
}

function fixStaticComp(arr, callback) {
  var obj = {};
  for (var j in reqComp) {
    if (reqComp[j] in arr) {
      //console.log(arr, arr[reqComp[j]]);
      //delete arr[reqComp[j]]; // for deletion array
      //obj = arr;
      obj[reqComp[j]] = arr[reqComp[j]];
    }
  }

  callback(obj);
}

export default getJSON;
