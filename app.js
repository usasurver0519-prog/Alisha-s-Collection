import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

import {
getFirestore,
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {

apiKey: "YOUR_API",

authDomain: "YOUR_DOMAIN",

projectId: "YOUR_PROJECT",

storageBucket: "YOUR_BUCKET",

messagingSenderId: "YOUR_ID",

appId: "YOUR_APP_ID"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const productsDiv = document.getElementById("products");

async function loadProducts(){

const snapshot = await getDocs(collection(db,"products"));

snapshot.forEach((doc)=>{

const p = doc.data();

productsDiv.innerHTML += `
<div class="card">

<img src="${p.image}">

<div class="card-content">

<h3>${p.name}</h3>

<p>${p.description}</p>

<h2>৳ ${p.price}</h2>

<a class="buy-btn"
href="order.html?id=${doc.id}">
Buy Now
</a>

</div>
</div>
`;

});

}

loadProducts();
