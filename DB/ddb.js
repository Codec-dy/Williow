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
                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
                var cell5 = newRow.insertCell(4);
                var cell6 = newRow.insertCell(5);
                var cell7 = newRow.insertCell(6);
                var cell8 = newRow.insertCell(7);
                var cell9 = newRow.insertCell(8);
               // var cell10 = newRow.insertCell(9);
                // var cell11 = newRow.insertCell(10);
                // var cell12 = newRow.insertCell(11);

/*
Inserting fetched data into individually created cells
*/
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
