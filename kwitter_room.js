var firebaseConfig = {
    apiKey: "AIzaSyD9iNyPGSrgtVStxnHq1XqzSQU5XlYHS5s",
    authDomain: "lets-chat-webapp-f158b.firebaseapp.com",
    projectId: "lets-chat-webapp-f158b",
    storageBucket: "lets-chat-webapp-f158b.appspot.com",
    messagingSenderId: "963307460292",
    appId: "1:963307460292:web:94da5e36aab047eb595b91"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addroom(){
  document.getElementById("addroom");
  localStorage("addroom")
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name" +Room_names);
row="<div class='roomname' id="+Room_names+" onclick='redirecttoromname(this.id)'> "+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();

function redirecttoromname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}

function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html"
 }