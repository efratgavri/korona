



//יצירת טבלת לקוחות אצל המשתמש

var path = 'https://localhost:44399/api/'
function GetCustomers() {
    axios.get(path + 'client/GetCostumerwithcityname').then(
        (response) => {
            console.log(response)
            var result = response.data;


            var body = document.getElementsByClassName("bodyb")[0];
            var table = document.createElement("table");
            table.className = "table table-hover MyTable ";


            var thead = document.createElement("thead");
            var tr = document.createElement("tr");
            var th = document.createElement("th");

            th.innerHTML = 'קוד לקוח';

            tr.appendChild(th);
            th = document.createElement("th");
            th.innerHTML = 'שם פרטי';

            tr.appendChild(th);
            th = document.createElement("th");
            th.innerHTML = 'שם משפחה';

            tr.appendChild(th);
            th = document.createElement("th");
            th.innerHTML = ' כתובת';

            tr.appendChild(th);
            th = document.createElement("th");
            th.innerHTML = ' תאריך לידה ';

            tr.appendChild(th);
            th = document.createElement("th");
            th.innerHTML = 'עיר';

            tr.appendChild(th);
            th = document.createElement("th");
            th.innerHTML = ' טלפון ';

            tr.appendChild(th);
            th = document.createElement("th");
            th.innerHTML = ' פלאפון ';

            tr.appendChild(th);

            thead.appendChild(tr);
            table.appendChild(thead);

            var tbody = document.createElement("tbody");
            
            for (var i = 0; i < result.length; i++) {
                tr = document.createElement("tr")
                tr.className = "MyTblTr"
                tr.value = result[i][0]
                //עבור כל עמודה
                for (var j = 0; j < result[i].length; j++) {
                    td = document.createElement("td")
                    td.innerHTML = result[i][j]
                    tr.appendChild(td)
                   tbody.appendChild(tr);
                }
            }

            table.appendChild(tbody);
            body.appendChild(table);


        },
        (error) => {
            console.log(error);
        }
    );
}



//חיפוש על פי שם


function Sarch() {
    var x, y;
   
    var path = 'https://localhost:44399/api/client'
    axios.get(path + '/Get').then(
        (response) => {
            console.log(response)
            var result = response.data;
            var str = document.getElementById("str").value;
            for (var i = 1; i < result.length; i++) {
                x = document.getElementsByClassName("bodyb");
                y = x[0].children[0].children[1].children[i].children[1].innerHTML;
                var res = y.indexOf(str, 0);
                if (res === -1)
                    x[0].children[0].children[1].children[i].style.display = 'none';
            }
            console.log(y);
        },
        (erorr) => {
            console.log(erorr)
        }
    );
}

//הוספת לקוח
function addcusttbl(path) {
    var id = document.getElementById("id").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var mobile_phone = document.getElementById("mobile_phone").value;
    var adress = document.getElementById("adress").value;
    var birthday = document.getElementById("birthday").value;
    var idcity = document.getElementById("idcity").value;
    var queryObj = { id_client: id, first_name: firstname, last_name: lastname, id_city: idcity, address: adress, birthday: birthday, phone: phone, mobile_phone: mobile_phone};

    axios.post(path, queryObj).then(
        (response) => {
            var result = response.data;

            if (result) {
                alert("לקוח נוסף בהצלחה");
            }
            console.log(result);

        },
        (error) => {
            console.log(error);
        }
    );
}

//בדיקות תקינות
function chek() {
    var flag=true
    var name = document.getElementById("firstname").value;
    if (name.length < 2) {
        document.getElementById("chekname").style.display = "block"
         flag= false;
    }
        
    else
        document.getElementById("chekname").style.display = "none"

    var name = document.getElementById("lastname").value;
    if (name.length < 2) {
        document.getElementById("cheklastname").style.display = "block"
        flag= false;
    }

    else
        document.getElementById("cheklastname").style.display = "none"

    var phon = document.getElementById("mobile_phone").value;
    if (phon.length < 10 || phon.length > 10) {
        document.getElementById("chekmobile_phone").style.display = "block"
        flag = false;
    }

    else
        document.getElementById("chekmobile_phone").style.display = "none"

  
        
 
    
        
    if (flag == true)
        addcusttbl('https://localhost:44399/api/client/Post')
}


// בדיקת תקינות הפאמטר שנשלח ריק  
function isEmpty(str) {
    return str.length == 0;
}


/*בדיקת תקינות תווים בלבד*/
function isValidString(str) {
    var badStr = ".abcdefghijklmnopqrstuvwxyz@-_1234567890תשרקצפעסןנםמלךכיטחזוהדגבא";
    var i = 0, p;
    while (i < str.length) {
        p = badStr.indexOf(str.charAt(i));
        if (p == -1) return false; i++;
    }
    return true;
}








//שתוצג תיבה לבחירת עיר
function Setcity(e) {
    var sel = document.getElementById("idcity" );
    for (var i = 0; i < e.length; i++) {
        opt = document.createElement('option');
        opt.text = e[i].city_name;
        opt.value = e[i].id_city;
        sel.appendChild(opt);
    }
}

