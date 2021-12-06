//YOUR FIREBASE LINKS
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
     user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag ="<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"
like_button ="<button class='btn btn-warning' id="+firebase_message_id+"value="+ like +"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
 function updateLike (message_id)
 {
       console.log("clicked on like button -"+ message_id);
       button_id + message_id;
       likes = document.getElementById(button_id).value;
       updated_likes = Number(likes) + 1;
       console.log(updated_likes);

       firebase.database().ref(room_name).child(message_id).update({
             like : updated_likes
       });

 }

 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location.replace("roblox.html");
 }

 function redirectToRoomName(name)
  { console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "roblox_page.html"; 
 }