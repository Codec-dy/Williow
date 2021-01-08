const indexedDB = window.indexedDB || webkitIndedexedDB || mozIndedexedDB || msIndexedDB;
const IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction ||
    window.msIDBTransaction;

const IDBKeyRange = window.IDBKeyRange ||
    window.webkitIDBKeyRange || window.msIDBKeyRange;
let btn = document.getElementsByClassName("btn_save");


if (!indexedDB) {
    alert("Unsupported Browser");
}

let db;
let request = indexedDB.open('Students_DB', 2);

//success
request.onsuccess = (e) => {
    console.log('Success: Opened DB' + db);
    db = e.target.result;
    //show Prev
}
//Error
request.onrror = (e) =>{
    console.log('Error: Count Not Open DB');
}

request.onupgradeneeded = (e) => {
    console.log('Opendata');
    db = e.target.result;
    let os = db.createObjectStore('Students',{
        keyPath:'id',
        autoIncrement:true
    });
    let obj_ns1 = db.createObjectStore('Nursury1',{
        keyPath:'id',
        autoIncrement:true
    });
    let obj_ns2 = db.createObjectStore('Nursury2',{
        keyPath:'id',
        autoIncrement:true
    });
    let obj_primary1 = db.createObjectStore('Primary1',{
        keyPath:'id',
        autoIncrement:true
    });
    let obj_primary2 = db.createObjectStore('Primary2',{
        keyPath:'id',
        autoIncrement:true
    });
    let obj_primary3 = db.createObjectStore('Primary3',{
        keyPath:'id',
        autoIncrement:true
    });
    let obj_primary4 = db.createObjectStore('Primary4',{
        keyPath:'id',
        autoIncrement:true
    });
    let obj_primary5 = db.createObjectStore('Primary5',{
        keyPath:'id',
        autoIncrement:true
    });
    let obj_primary6 = db.createObjectStore('Primary6',{
        keyPath:'id',
        autoIncrement:true
    });
    let obj_jhs1 = db.createObjectStore('JHS1',{
        keyPath:'id',
        autoIncrement:true
    });
    let obj_jhs2 = db.createObjectStore('JHS2',{
        keyPath:'id',
        autoIncrement:true
    });
    let obj_jhs3 = db.createObjectStore('JHS3',{
        keyPath:'id',
        autoIncrement:true
    });
};
localStorage['admNo'] = parseInt(0);
//add 
let add = () => {
    localStorage['admNo'] = parseInt(localStorage['admNo'])+1;
    //get values of student
    var clas =document.getElementById('classS').value;
    var admno = localStorage['admNo']
    document.getElementById('admNo').innerHTML = "AdmNo: "+ localStorage['admNo'];
    var DOA = new Date();
    var dd = String(DOA.getDate()).padStart(2,"0");
    var mm = String(DOA.getMonth()+1).padStart(2,"0");
    var yy = DOA.getFullYear();
    DOA = mm + "/" + dd + "/" + yy;
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var DOB = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var image = document.getElementById("image").files[0];
    //get values
    var fname = document.getElementById('father').value;
    var mname = document.getElementById('mother').value;
    var rel = document.getElementById('relationship').value;
    var fjob = document.getElementById('father_job').value;
    var mjob = document.getElementById('mother_job').value;
    var fNo = document.getElementById('father_no').value;
    var mNo = document.getElementById('mother_no').value;
    
    //get values gaurdian
    var Gar = document.getElementById('guardian').value;
    var Gar_no = document.getElementById('guardian_no').value;
    var GarOcc = document.getElementById('guardianOcc').value;
    
    //get health and location
    var NH = document.getElementById('NHIS').value;
    var Digi = document.getElementById('Digi').value;
    var plt = document.getElementById('plt').value;
    var blk = document.getElementById('blk').value;
    var area = document.getElementById('area').value;
    //create transactions
    var transaction = db.transaction(['Students','JHS3','JHS2','JHS1','Primary6','Primary5','Primary4','Primary3','Primary2','Primary1','Nursury2','Nursury1'], 'readwrite');
    
    //Asking for ObjStore
    var store = transaction.objectStore('Students');
    var storej3 = transaction.objectStore('JHS3');
    var storej2 = transaction.objectStore('JHS2');
    var storej1 = transaction.objectStore('JHS1');
    var storep6 = transaction.objectStore('Primary6');
    var storep5 = transaction.objectStore('Primary5');
    var storep4 = transaction.objectStore('Primary4');
    var storep3 = transaction.objectStore('Primary3');
    var storep2 = transaction.objectStore('Primary2');
    var storep1 = transaction.objectStore('Primary1');
    var storen2 = transaction.objectStore('Nursury2');
    var storen1 = transaction.objectStore('Nursury1');
    let Info = {
        
        //student's data
        Clas: clas,
        Adm_No: admno,
        DateOnAdmission: DOA,
        Name: name,
        Age: age,
        DateOfBirth: DOB,
        Gender: gender,
        Image: image,
        //parents info
        father: fname,
        mother: mname,
        relationship: rel,
        father_Occp: fjob,
        mother_Occp: mjob,
        father_no: fNo,
        mother_no: mNo,
        
        //guardian info
        GuardianName: Gar,
        Guaridan_no: Gar_no,
        GuardianOcc: GarOcc,
        
        //get health and location
        NHIS: NH,
        DigitalAdd: Digi,
        PLT: plt,
        BLK: blk,
        Area: area
    };

    //adding
    
    let request2;
    let request;
    switch (Info.Clas) {
        case "nursery1":
            request2 = storen1.add(Info);
            request = store.add(Info);
            break;
        case "nursery2":
            request2 = storen2.add(Info);
            request = store.add(Info);
            break;
        case "primary1":
            request2 = storep1.add(Info);
            request = store.add(Info);
            break;
        case "primary2":
            request2 = storep2.add(Info);
            request = store.add(Info);
            break;
        case "primary3":
            request2 = storep3.add(Info);
            request = store.add(Info);
            break;
        case "primary4":
            request2 = storep4.add(Info);
            request = store.add(Info);
            break;
        case "primary5":
            request2 = storep5.add(Info);
            request = store.add(Info);
            break;
        case "primary6":
            request2 = storep6.add(Info);
            request = store.add(Info);
            break;
        case "jhs1":
            request2 = storej1.add(Info);
            request = store.add(Info);
            break;
        case "jhs2":
            request2 = storej2.add(Info);
            request = store.add(Info);
            break;
        case "jhs3":
            request2 = storej3.add(Info);
            request = store.add(Info);
            break;
        default:
            request = store.add(Info);
            break;
    }

//success
    request.onsuccess = (e) => {
    alert("Saved");
    console.log('Saved');
    console.log(request.result);
    }
    request2.onsuccess = (e) => {
    console.log('Saved');
    console.log(request2.result);
};

//Error
    request.onerror = (e) => {
//    alert("Error no Entry");
    console.log('no Entry');
    };
    request2.onerror = (e) => {
//    alert("Error no Entry");
    console.log('no Entry');
    };
};
