 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB3x7WFvoekA4RgEBJ6MKboTvoeLUboV4A",
    authDomain: "corona-testing-project.firebaseapp.com",
    databaseURL: "https://corona-testing-project-default-rtdb.firebaseio.com",
    projectId: "corona-testing-project",
    storageBucket: "corona-testing-project.appspot.com",
    messagingSenderId: "1078267151923",
    appId: "1:1078267151923:web:7f62cf816a8203783c4546"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var userInputs = firebase.database().ref("userInputs")
  document.getElementById('testForm').addEventListener("submit",submitForm)
function submitForm(e){
    e.preventDefault();
    var state = getInputVal('state');
    state=state.toLowerCase();
    readState(state);
    var fname= getInputVal("firstname")
    var lname= getInputVal("lastname")
    var name = fname + " " + lname
    var mobile= getInputVal("mobile")
    var dateofbirth= getInputVal("dateofbirth")
    var email= getInputVal("email")
    var profession= getInputVal("profession")
    var selectedOption= document.querySelector("input[name=option]:checked").value
    saveMessages(name, mobile, dateofbirth,profession,email,state,selectedOption)
}  

function getInputVal(id){
    return document.getElementById(id).value;
}
function readState(state){
    var centers;
    var ref = firebase.database().ref(state);
    ref.on('value', (data) => {
     centers = data.val();
     document.getElementById("result").innerHTML ="<br>"+centers.toUpperCase();
})

}
function saveMessages(name, mobile, dateofbirth,profession,email,state,selectedOption){
 var newUserInput = userInputs.push();
 newUserInput.set({
     name:name,
     mobile:mobile,
     email:email,
     profession:profession,
     dateofbirth:dateofbirth,
     sate:state,
     selOption:selectedOption,

 }) 
}

