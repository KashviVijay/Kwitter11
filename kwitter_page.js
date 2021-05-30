//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDyKcL_3-TRyWd7u2p5wImuxavyPxY4Xd0",
    authDomain: "kwitter-4cdd3.firebaseapp.com",
    databaseURL: "https://kwitter-4cdd3-default-rtdb.firebaseio.com",
    projectId: "kwitter-4cdd3",
    storageBucket: "kwitter-4cdd3.appspot.com",
    messagingSenderId: "271161967553",
    appId: "1:271161967553:web:0ad97e1c16473a8f8a6540",
    measurementId: "G-DG0PPF07R3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });

    document.getElementById("msg").value="";
}