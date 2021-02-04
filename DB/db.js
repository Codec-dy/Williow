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

request.onupgradeneeded = (event) => {

    console.log('creating Objectstores');
    db = event.target.result;
    let crech = db.createObjectStore('Creche',{
        keyPath:'id',
        autoIncrement:true
    });

    let kg1 = db.createObjectStore('KG1',{
        keyPath:'id',
        autoIncrement:true
    });

    let kg2 = db.createObjectStore('KG2',{
        keyPath:'id',
        autoIncrement:true
    });

    let nurseryA = db.createObjectStore('TNursery',{
        keyPath:'id',
        autoIncrement:true
    });

    let obj_ns1 = db.createObjectStore('Nursery1',{
        keyPath:'id',
        autoIncrement:true
    });

    let obj_ns2 = db.createObjectStore('Nursery2',{
        keyPath:'id',
        autoIncrement:true
    });

    let primaryA = db.createObjectStore('TPrimary',{
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

    let jhsA = db.createObjectStore('TJHS',{
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

console.log(request);
request.onerror = (event) => {
    console.log("Error: " + event);
};

request.onsuccess = (event) => {
    db = event.target.result;
    console.log("Success: " + db);
    navigator.storage.persist().then(console.log.bind(console));
    navigator.storage.persist().then((granted) => {
      if (granted) {
        console.log('persisted ');
      }
    })
    navigator.storage.persist();
    if (navigator.storage && navigator.storage.persist){
      const isPersisted =  navigator.storage.persisted();
      console.log('Persisted storage granted:',isPersisted);
    }
};

let add = () => {

  //get values of student
  var clas =document.getElementById('classS').value;
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

  let data = {
      //student's data
      Clas: clas,
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
  switch (data.Clas) {
      case "Creche":
          request = db.transaction(['Creche'], 'readwrite').objectStore('Creche').add(data);
          break;
      case "Nursery1":
          request = db.transaction(['Nursery1'], 'readwrite').objectStore('Nursery1').add(data);
          break;
      case "Nursery2":
          request = db.transaction(['Nursery2'], 'readwrite').objectStore('Nursery2').add(data);
          break;
      case "KG1":
          request = db.transaction(['KG1'], 'readwrite').objectStore('KG1').add(data);
          break;
      case "KG2":
          request = db.transaction(['KG2'], 'readwrite').objectStore('KG2').add(data);
          break;
      case "primary1":
          request = db.transaction(['Primary1'], 'readwrite').objectStore('Primary1').add(data);
          break;
      case "primary2":
          request = db.transaction(['Primary2'], 'readwrite').objectStore('Primary2').add(data);
          break;
      case "primary3":
          request = db.transaction(['Primary3'], 'readwrite').objectStore('Primary3').add(data);
          break;
      case "primary4":
          request = db.transaction(['Primary4'], 'readwrite').objectStore('Primary4').add(data);
          break;
      case "primary5":
          request = db.transaction(['Primary5'], 'readwrite').objectStore('Primary5').add(data);
          break;
      case "primary6":
          request = db.transaction(['Primary6'], 'readwrite').objectStore('Primary6').add(data);
          break;
      case "jhs1":
          request = db.transaction(['TJHS'], 'readwrite').objectStore('TJHS').add(data);
          request = db.transaction(['JHS1'], 'readwrite').objectStore('JHS1').add(data);
          break;
      case "jhs2":
          request = db.transaction(['TJHS'], 'readwrite').objectStore('TJHS').add(data);
          request = db.transaction(['JHS2'], 'readwrite').objectStore('JHS2').add(data);
          break;
      case "jhs3":
          request = db.transaction(['TJHS'], 'readwrite').objectStore('TJHS').add(data);
          request = db.transaction(['JHS3'], 'readwrite').objectStore('JHS3').add(data);
          break;
      case "KG1":
          request = db.transaction(['KG1'], 'readwrite').objectStore('KG1').add(data);
          break;
      case "KG2":
          request = db.transaction(['KG2'], 'readwrite').objectStore('KG2').add(data);
          break;
          case "TKG":
          request = db.transaction(['TKG'], 'readwrite').objectStore('TKG').add(data);
          break;
      default:
          break;
  }
      // ==================
      // let request = db.transaction(['Creche'], 'readwrite').objectStore('Creche').add(data);
      request.onsuccess = (event) => {
        alert("Data Saved!");
        };
        request.onerror = (event) => {
          console.log('Couldn\'t be Stored');
              //Other code goes here
              console.log('error: ', event.target.error.name)

        };
  };
$("#save").click(function(){
  add();
});
