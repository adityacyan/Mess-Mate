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

var globalVariable = "Initial Value";


function changeGlobalValue(newValue) {
    globalVariable = newValue;
    console.log("Global variable updated to:", globalVariable);
}



const login = () => {
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value
    
    
    console.log(email,pass)
    auth.signInWithEmailAndPassword(email, pass)
        .then((res) => {
            const datausr = res.user
            const userEmail = res.user.email
            
            
        
            if(res.user.email != 'admin@nitp.com'){
                console.log("admin not here") //debug
                window.location.href = "userpage1.html";

            }else{
                console.log("admin is here")
                window.location.href = "adminpage1.html";
            }  
            
        })
        .catch((err) => {
            alert(err.message)


        })
    
        console.log(email)
        var collectionRef = db.collection("user_data");


var query = collectionRef.where("username_assigned", "==", email);



query.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    
        console.log(doc.id);
        changeGlobalValue(doc.id)

    

    
    });
}).catch(function(error) {
    console.log("Error getting documents: ", error);
});


    
}





//admin@nitp.com
    //admin123


    const breakfast = () => {
        db.collection('user_data').doc('globalVariable')
        .update({
            breakfast: true

            
        })
        .then(() => {
            alert('Data Updated')
        })
    }

    const lunch = () => {
        db.collection('user_data').doc(globalVariable)
        .update({
            lunch: true
        })
        .then(() => {
            alert('Data Updated')
        })
    }

    const snacks = () => {
        db.collection('user_data').doc(globalVariable)
        .update({
            snacks: true
        })
        .then(() => {
            alert('Data Updated')
        })
    }

    const dinner = () => {
        db.collection('user_data').doc(globalVariable)
        .update({
            dinner: true
        })
        .then(() => {
            alert('Data Updated')
        })
    }


const redirector = () => {
    window.location.href = "adminpage2.html";
}