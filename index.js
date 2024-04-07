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



const login = () => {
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value
    console.log(email,pass)
    auth.signInWithEmailAndPassword(email, pass)
        .then((res) => {
            const datausr = res.user
            console.log(res.user.email)
        
            if(res.user.email != 'admin@nitp.com'){
                console.log("admin not here") //debug

            }else{
                console.log("admin is here")
                
            }  
            
        })
        .catch((err) => {
            alert(err.message)


        })
    
    
}

//admin@nitp.com
    //admin123