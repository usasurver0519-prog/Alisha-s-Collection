import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpCi0MmCMZMMt79sgxfP5xYQ88pnMxyzc",
  authDomain: "alisha-collection-215f8.firebaseapp.com",
  projectId: "alisha-collection-215f8",
  storageBucket: "alisha-collection-215f8.firebasestorage.app",
  messagingSenderId: "38995104343",
  appId: "1:38995104343:web:38600db5a3304bddae0912",
  measurementId: "G-LG3H5V4FWG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadProducts() {
  const productsDiv = document.getElementById("products");

  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    const p = doc.data();

    productsDiv.innerHTML += `
      <div class="product">
        <img src="${p.image}" width="200">
        <h3>${p.name}</h3>
        <p>৳ ${p.price}</p>
        <p>${p.details}</p>
        <a href="order.html">
          <button>Buy Now</button>
        </a>
      </div>
    `;
  });
}

loadProducts();
