

//מונה למספר השורות
let cnt;

//פונקצית איתחול
function onload() {
    cnt = 0;
    getAllcategoryToSelect(0)
}

//הןספת שורה לטבלה

function addtable() {

   var mytable = document.getElementById("mytable")
    var mytr = document.createElement("tr")
   cnt++;
    for (var i = 0; i < 5; i++) {
        var mytd = document.createElement("td")
        mytd.style.border = "1px solid black";
        mytd.style.height = "50px";
       
        if (i == 0) {
         

             getAllcategoryToSelect(cnt)
            mytd.innerHTML = '<select id="selectcategory' + cnt + '" onchange="Getcategorproduct(' + cnt + ')" > <option> בחר קטגוריה </option> </select>'

            
        }
        if (i == 1) {
        
            mytd.innerHTML = '<select id="selectproduct' + cnt + '" onchange="chekavalable(' + cnt + '),getcost(' + cnt + ')"> <option> בחר מוצר </option> </select>'
        }
        if (i== 2) {
           
            mytd.innerHTML='<div id="iditem'+cnt+'"></div>'
        }
        if (i == 3) {
            

            mytd.innerHTML = '<input type="Date" id="datereturn'+cnt+'"></input>'
        }
        //if (i == 4) {
           

        //    mytd.innerHTML = '<input type="Date" id="dateactualreturn"></input>'
        //}
        if (i == 4) {
           
            mytd.innerHTML = '<div id="divcost' + cnt + '"></div>'
        }
        mytr.appendChild(mytd)
     
    }
    mytable.appendChild(mytr)
}

//פונקציה שמחשבת סכום לתשלום
function sumcost() {
    var sum = 0;
    //x = document.getElementById("mytable").children[0].children[1].children[5].innerHTML;
    //if (x != "")
    //    sum =sum+ x;
    for (var i = 0; i < cnt+ 1; i++) {
        x = document.getElementById("divcost"+i).innerHTML;
        if (x != "") {
            x = parseInt(x);
            sum =  sum + x;
        }
       
    }
 document.getElementById("sumcost").innerHTML = sum;
}



//הוספת פניה

function addask() {
    var path = 'https://localhost:44399/api/ask/post'
    var idcust = document.getElementById("idcust").value;
   /* var date = document.getElementById("date").value;*/
    var sumcost = document.getElementById("sumcost").innerHTML;
    var pay = document.getElementById("pay").value;
    var queryObj = { idcustomer: idcust/*, date: date*/, sumpay: sumcost, pay: pay, active: true };
    
    axios.post(path, queryObj).then(
        (response) => {
            var result = response.data;
            debugger;
            if (result) {
                alert("הפניה נוספה בהצלחה");
                Getidask1();
            }
           

        },
        (error) => {
            console.log(error);
        }
    );
}

//מחזירה קוד פניה נוכחי 
function Getidask1() {
    var id = document.getElementById("idcust").value;
    var path = 'https://localhost:44399/api/ask/Getidask/'
    axios.get(path + id).then(
        (response) => {
            console.log(response)
            var result = response.data;

            if (result != " ") {
               var thisidask = result.idask;
                addrenting(thisidask);
            }
           
        },
        (error) => {

            alert("מוצר זה תפוס")
        }
    );
}

// //עדכון סכום סופי לתשלום(הוספת הקנס)
function Update_sumpuy(i,idask) {

    
    var fine = document.getElementById("divfine" + i).value;
    var queryObj = [idask = parseInt(idask), fine = fine];
    axios.post('https://localhost:44399/api/ask/Update_sumpuy', queryObj).then(
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

//מחזירה סכןם שנותר לתשלום 
function Getpay(idask) {
    
    var path = 'https://localhost:44399/api/ask/Getpay/'
    axios.get(path + idask).then(
        (response) => {
            console.log(response)
            var result = response.data;

            if (result != " ") {
                var pay = parseInt(result.pay);
                var sumpay = parseInt(result.sumpay);
                var topay = sumpay - pay;
                document.getElementById("topay").innerHTML = topay;
            }

        },
        (error) => {

            alert("מוצר זה תפוס")
        }
    );
}

function Update_asknotact(idask) {

    

    var queryObj = [idask = parseInt(idask)];
    axios.post('https://localhost:44399/api/ask/Update_asknotact', queryObj).then(
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

