const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJIfAUkU_TWIEZHMuRhiNd606pmvvAXhs",
    authDomain: "team-aasmaan-hack0fest.firebaseapp.com",
    projectId: "team-aasmaan-hack0fest",
    storageBucket: "team-aasmaan-hack0fest.appspot.com",
    messagingSenderId: "1041308673296",
    appId: "1:1041308673296:web:1bdcb586de5c286e527195"

});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const student_leave = () => {
    const name_of_student = document.getElementById("input1").value 
    // const roll_number = document.getElementById("input2").value
    const room_number = document.getElementById("input2").value
    const hostel_alloted = document.getElementById("input3").value
    const date_of_leaving = document.getElementById("input4").value
    const date_of_returning = document.getElementById("input5").value

    db.collection('mess_leave')
    .add({
        name_of_student: name_of_student,
        
        room_number: room_number,
        hostel_alloted: hostel_alloted,
        date_of_leaving: date_of_leaving,
        date_of_returning: date_of_returning,
      
    })
    .then((docRef) => {
        let id_id = docRef.id;
        console.log("Document written with ID:", docRef.id);
    
    })


    .catch((error) => {
        console.error("Error adding document:", error);

    })}

    const redirector = () => {
        window.location.href = "userpage3.html";
    }
