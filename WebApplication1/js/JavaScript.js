//const { error } = require("jquery");




function getAll() {
    var path = 'https://localhost:44399/api/values'

    axios.get(path + '/GetAll').then(
        (response) => {
            var result = response.data;
            document.getElementById('damo').innerHTML = result.join("*");
            console.log(result)
        },
        (error) => {
            console.log(error);
        }
    )
}


function makeget() {
    console.log(makeget)
    var path = 'https://localhost:44399/api/values'

    axios.get(path).then(
        (response) => {
            var result = response.data;
            document.getElementById('damo').innerHTML = result.join("*");
            console.log(result)
        },
        (error) => {
            console.log(error);
        }
    )
}

function getByName() {
    var name = document.getElementById("student");
    var path = 'https://localhost:44399/api/values';

    axios.get(path + '/GetByName' + name).then(
        (response) => {
            var result = response.data;
            document.getElementById('damo').innerHTML = result.join("*");
            console.log(result)
        },
        (error) => {
            console.log(error);
        }
    )
}

//function makePostRequset(path) {
//    var queryObj = { firstname: "Efrat", lastname: "Frid" };
//    axios.post(path, queryObj).then(
//        (response) => {
//            var result = response.data;
//            let txt = "";
//            for (let x in result) {
//                txt += result[x] + " ";
//            };
//            document.getElementById("demo").innerHTML = txt;
//            //if (result) {
//            //    alert("נוספת למערכת בהצלחה:)");
//            //}
//            console.log(result);
//        },
//        (error) => {
//            console.log(error);
//        }
//    )
//}

function dynamicPostRequest(path1) {
    var anotherObj = { Id_Student="23456", First_Name="Efrat" }
    var queryObj = [age = 50, an = anotherObj]
    axios.post(path1, queryObj).then(
        (response) => {
            var result = response.data;
            document.getElementById("demo").innerHTML == result;
        },
        (error) => {
            console.log(error);
        }
    )
}

