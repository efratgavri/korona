

function Getidclient() {
    var id = document.getElementById("id_client" ).value;
    var path = 'https://localhost:44399/api/korona/Getidclient/'
    axios.get(path + id).then(
        (response) => {
            console.log(response)
            var result = response.data;

            if (result == " ") {
                Addnewkorona('https://localhost:44399/api/korona/Post')
            }
            else
                Update_date_vecvery()

        },
        (error) => {

            alert("מוצר זה תפוס")
        }
    );
}


function Update_date_vecvery() {

    var id = document.getElementById("id_client").value;
    var date_vecvery = document.getElementById("date_vecovery").value;
    var queryObj = [id_client = id, date_vecvery = date_vecvery];
    axios.post('https://localhost:44399/api/korona/Update_date_vecvery', queryObj).then(
        (response) => {
            var result = response.data;
            if (result) {
                alert("המייל עודכן בהצלחה");
            }
            console.log(result);

        },
        (error) => {
            console.log(error);
        }
    );

}

//הוספת עיר
function Addnewkorona(path) {
    var id = document.getElementById("id_client").value;
    var date_sick = document.getElementById("date_sick").value;
    var date_vecovery = '00.00.00'
    var queryObj = { id_client: id, date_sick: date_sick, date_vecovery: date_vecovery };

    axios.post(path, queryObj).then(
        (response) => {
            var result = response.data;

            if (result) {
                alert("העיר נוספה בהצלחה");
            }
            console.log(result);

        },
        (error) => {
            console.log(error);
        }
    );
}