//const indexedDB = window.indexedDB || webkitIndedexedDB || mozIndedexedDB || msIndexedDB;
//const IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction ||
//    window.msIDBTransaction;
//
//const IDBKeyRange = window.IDBKeyRange ||
//    window.webkitIDBKeyRange || window.msIDBKeyRange;
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

request = indexedDB.open('Students_DB', 2);

request.onerror = (e) => {
    console.log("Error: " + e);
};

function info(){
    localStorage['pas'] = document.getElementById('classP').value;
}

    


//-----------------------------------------------
//                  display
//-----------------------------------------------

request.onupgradeneeded = (e) => {
    console.log('done1');
    db = e.target.result;
};
request.onsuccess = (event) => {
    db = request.result;
    console.log("Success: " + db);
    showStudents();
};


let showStudents = () => {
    let clasName = document.querySelector("#tablename");
    clasName.innerHTML=`<h1>${localStorage['pas']}</h1>`
    //seeking objstore
    console.log("test " + db);
    let objectStore;
    objectStore  = db.transaction(localStorage['pas']).objectStore(localStorage['pas']);
    
//    let nowE = document.getElementById("nowE");
    
    objectStore.openCursor().onsuccess = (e) => {
        let cursor = e.target.result;
        console.log(cursor);
        if (cursor) {
            console.log("looping data to view");
           let  ent, Admno, Area, DateOnAdmission, Name, Age, DateOfBirth, Gender, Father, Mother, Rel, Fo, Mo, Fn, BLK, PLT;
                ent = cursor.value.Clas;
                Admno = cursor.value.id;
                DateOnAdmission = cursor.value.DateOnAdmission;
                Name = cursor.value.Name;
                Age = cursor.value.Age;
                DateOfBirth = cursor.value.DateOfBirth;
                Gender = cursor.value.Gender;
                Father = cursor.value.father;
                Mother = cursor.value.mother;
                Rel = cursor.value.relationship;
                Fo = cursor.value.father_Occp;
                Mo = cursor.value.mother_Occp;
                Fn =  cursor.value.father_no;
                Nhis =  cursor.value.NHIS;
                Area = cursor.value.Area;
                Blk = cursor.value.BLK;
                Plt = cursor.value.PLT;
/*
Grabbing the form to create the row with cells
*/
                var row = document.getElementById("nowE");
/*
Creating row and inserting cells
*/
            
            
                var newRow = row.insertRow(1);
                console.log(newRow);
                //inserting cells per each input
                newRow.id = "id_"+Admno;
                var cell0 = newRow.insertCell(0);
                cell0.className = "selec";
                var cell1 = newRow.insertCell(1);
                var cell2 = newRow.insertCell(2);
                var cell3 = newRow.insertCell(3);
                var cell4 = newRow.insertCell(4);
                var cell5 = newRow.insertCell(5);
                var cell6 = newRow.insertCell(6);
                var cell7 = newRow.insertCell(7);
                var cell8 = newRow.insertCell(8);
                var cell9 = newRow.insertCell(9);
               // var cell10 = newRow.insertCell(9);
                // var cell11 = newRow.insertCell(10);
                // var cell12 = newRow.insertCell(11);

/*
Inserting fetched data into individually created cells
*/              cell0.innerHTML="<input type=checkbox class=select value="+Admno+">";
                cell1.innerHTML = Admno;
                cell2.innerHTML = DateOnAdmission;
                cell3.innerHTML = Name;
                cell4.innerHTML = DateOfBirth;
                cell5.innerHTML = Gender;
                cell6.innerHTML = Nhis;
                cell7.innerHTML = Area;
                cell8.innerHTML = Blk;
                cell9.innerHTML = Plt;
                //cell10.innerHTML = ent;
                // cell10.innerHTML = fO;
                // cell11.innerHTML = mO;
                // cell12.innerHTML = fn;
            cursor.continue();
            
        }
//        console.log("done view");

    };
};

    setTimeout(() => {
        $("#delete").click(function(){
            let a = document.querySelectorAll('.select:checked');
            a.forEach(item=>{
                    let id = parseInt(item.value);
                    let objectStore  = db.transaction(localStorage['pas'],'readwrite').objectStore(localStorage['pas']);
                    objectStore.openCursor().onsuccess = (e) => {
                        let cursor = e.target.result;
                        if(cursor){
                            if (cursor.value.id===id) {
                                objectStore.delete(id);
                            }
                            cursor.continue();  
                        }
                    }   
            }); 
            setTimeout(function() {
                location.reload();   
            },500)
        });

        $("tr>td:not(.selec)").click(function(){
            let id = parseInt((this.parentElement.id).split("_")[1]);
            console.log(id)
            let objectStore  = db.transaction(localStorage['pas']).objectStore(localStorage['pas']);
            objectStore.openCursor().onsuccess = (e) => {
                let cursor = e.target.result;
                if(cursor){
                    if (cursor.value.id==id) {
                        let info = cursor.value
                        let img = document.getElementById("immg");
                        if(info.Image!=undefined){
                            let blob = new Blob([info.Image],{type:info.Image.type})
                            console.log(blob)
                            let imge = URL.createObjectURL(blob);
                            let dow = document.getElementById("down");
                        img.src=imge;
                        dow.href=imge;
                        }else{
                            img.src="../img/index1.png";
                        }
                    $("#gNam").text(info.Name)
                    $("#gGender").text(info.Gender)
                    $("#gFath").text(info.father)
                    $("#gMoth").text(info.mother)
                    $("#gClas").text(info.Clas)
                    $("#gDOB").text(info.DateOfBirth)
                    $("#gDOA").text(info.DateOnAdmission)
                    $("#gfathNumb").text(info.father_no)
                    $("#gmothNumb").text(info.mother_no)
                    $("#gNHIS").text(info.NHIS)
                    $("#gDigital").text(info.DigitalAdd)
                    $("#gPLT").text(info.PLT)
                    $("#gBLK").text(info.BLK)
                    $("#gArea").text(info.Area)
                    $(".cover").show()
                    $("#personal").show()   
                    //Edit
                    $("#eNam").val(info.Name)
                    $("#eGender").val(info.Gender)
                    $("#eFath").val(info.father)
                    $("#eMoth").val(info.mother)
                    $("#eClas").val(info.Clas)
                    $("#eDOB").val(info.DateOfBirth)
                    $("#eDOA").val(info.DateOnAdmission)
                    $("#efathNumb").val(info.father_no)
                    $("#emothNumb").val(info.mother_no)
                    $("#eNHIS").val(info.NHIS)
                    $("#eDigital").val(info.DigitalAdd)
                    $("#ePLT").val(info.PLT)
                    $("#eBLK").val(info.BLK)
                    $("#eArea").val(info.Area)
                    $(".cover").show()
                    $("#personal").show()  
                    $("#info1").hide()
                    $("#info").show() 
                }
                cursor.continue();  
            }
            }
    });
    $(".cover").click(function(){
        $(this).hide();
        $("#personal").hide()
    });  
    $("#editt").click(function(){
        $("#info").toggle();
        $("#info1").toggle();
    });
    $(".select").on("input",function(e){
        $(".cover").hide();
        $("#personal").hide()
        let a = document.querySelectorAll(".select:checked");
            if(a.length>1){
                document.querySelector("#edit").disabled=true;
            }else{
                document.querySelector("#edit").disabled=false;
            }
    });
    $("#edit").click(function(){
        let id = document.querySelector(".select:checked")
        let objectStore  = db.transaction(localStorage['pas']).objectStore(localStorage['pas']);
            objectStore.openCursor().onsuccess = (e) => {
                let cursor = e.target.result;
                if(cursor){
                    if (cursor.value.id==id) {
                        let info = cursor.value
                        let img = document.getElementById("immg");
                        if(info.Image!=undefined){
                        console.log(cursor.value.id,id)
                        let imge = URL.createObjectURL(info.Image);
                        img.src=imge;
                        }else{
                            img.src="../img/index1.png";
                        }
                        $("#eNam").val(info.Name)
                        $("#eGender").val(info.Gender)
                        $("#eFath").val(info.father)
                        $("#eMoth").val(info.mother)
                        $("#eClas").val(info.Clas)
                        $("#eDOB").val(info.DateOfBirth)
                        $("#eDOA").val(info.DateOnAdmission)
                        $("#efathNumb").val(info.father_no)
                        $("#emothNumb").val(info.mother_no)
                        $("#eNHIS").val(info.NHIS)
                        $("#eDigital").val(info.DigitalAdd)
                        $("#ePLT").val(info.PLT)
                        $("#eBLK").val(info.BLK)
                        $("#eArea").val(info.Area)
                        $(".cover").show()
                        $("#personal").show()   

                    }
                }
            }
        $(".cover").show();
        $("#personal").show();
        $("#info").hide()
        $("#info1").show()
    });
    }, 2000);
    
