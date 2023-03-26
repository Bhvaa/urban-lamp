// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBgIEUsnViPVctM_Te5HWg_v4nxonZM5Yg",
  authDomain: "kwitter-85c4f.firebaseapp.com",
  databaseURL: "https://kwitter-85c4f-default-rtdb.firebaseio.com",
  projectId: "kwitter-85c4f",
  storageBucket: "kwitter-85c4f.appspot.com",
  messagingSenderId: "379787459266",
  appId: "1:379787459266:web:e653a6388d4a95b4cb995b",
  measurementId: "G-BEN314DKW2"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name)
    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



