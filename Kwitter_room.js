var firebaseConfig = {
    apiKey: "AIzaSyBFe-u0zFIVY2XOANs3S2LQp4_9grY7NfQ",
    authDomain: "kwitter-2adb2.firebaseapp.com",
    databaseURL: "https://kwitter-2adb2-default-rtdb.firebaseio.com",
    projectId: "kwitter-2adb2",
    storageBucket: "kwitter-2adb2.appspot.com",
    messagingSenderId: "603892750099",
    appId: "1:603892750099:web:b00b68a6d8eafd93f72ce6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();


function addUser()
{
  window.location = "Kwitter_room.html";
}