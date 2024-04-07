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

const add_student = () => {
    const name_of_student = document.getElementById("input1").value 
    const roll_number = document.getElementById("input2").value
    const room_number = document.getElementById("input3").value
    const hostel_alloted = document.getElementById("input4").value
    const username_assigned = document.getElementById("input5").value
    const password = document.getElementById("input6").value

    db.collection('user_data')
    .add({
        name_of_student: name_of_student,
        roll_number: roll_number,
        room_number: room_number,
        hostel_alloted: hostel_alloted,
        username_assigned: username_assigned,
        password: password,
        coupon: 500,
        breakfast: false,
        lunch: false,
        snacks: false,
        dinner: false
    })
    .then((docRef) => {
        let id_id = docRef.id;
        console.log("Document written with ID:", docRef.id);
    
    })


    .catch((error) => {
        console.error("Error adding document:", error);

    });
    auth.createUserWithEmailAndPassword(username_assigned, password) 
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.code)
        // alert(err.message)

    })




}



