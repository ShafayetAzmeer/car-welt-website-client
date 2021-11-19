const firebaseConfig = { 

  // apiKey: "AIzaSyCOS9-kFNOWL8dc1_Jb_1UqcBrl4cvXUxU",

  // authDomain: "niche-product-website-92ef7.firebaseapp.com",

  // projectId: "niche-product-website-92ef7",

  // storageBucket: "niche-product-website-92ef7.appspot.com",

  // messagingSenderId: "970979120659",

  // appId: "1:970979120659:web:041ce2c417abe8f83c91e6"
   
  apiKey: process.env.REACT_APP_API_KEY, 
  authDomain: process.env.REACT_APP_AUTH_DOMAIN, 
  projectId: process.env.REACT_APP_PROJECT_ID, 
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  
  };

  export default firebaseConfig;