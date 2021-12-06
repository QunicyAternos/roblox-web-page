

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAXvngkWDXS6C1QuG0N500INBjyCLw-Las",
      authDomain: "kwitter-rd-8ad8f.firebaseapp.com",
      databaseURL: "https://kwitter-rd-8ad8f-default-rtdb.firebaseio.com",
      projectId: "kwitter-rd-8ad8f",
      storageBucket: "kwitter-rd-8ad8f.appspot.com",
      messagingSenderId: "303194373022",
      appId: "1:303194373022:web:3b26ae19f23f26a177f48f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

     function addRoom()
     {
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose:"AddingRoomName"
           });
           localStorage.setItem("room_name",room_name);
           window.location="roblox_page.html";


     }

     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      
      console.log("Room Name-"+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      });});}
      getData();
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="roblox_page.html";
      }
      