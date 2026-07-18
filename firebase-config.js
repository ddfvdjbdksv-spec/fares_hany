// ============================================================
// FIREBASE CONFIG — Scorpion English Academy (fareshany1-34647)
// Compat SDK build (matches firebase-app-compat.js / firestore-compat.js
// / auth-compat.js / functions-compat.js already used across the project
// — NOT the modular v9+ "firebase/app" import syntax).
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCN-NrOx_zyvDwIV_EyI2bxt92mKsKNHqw",
  authDomain: "fareshany1-34647.firebaseapp.com",
  projectId: "fareshany1-34647",
  storageBucket: "fareshany1-34647.firebasestorage.app",
  messagingSenderId: "528031096147",
  appId: "1:528031096147:web:60e787649ec07d117495a6",
  measurementId: "G-N6B39RSMQP"
};

firebase.initializeApp(firebaseConfig);

window.db = firebase.firestore();
window.auth = firebase.auth ? firebase.auth() : null;
window.firebase = firebase;

// Better offline behavior for Firestore reads (safe to ignore if it fails,
// e.g. multiple tabs open without multi-tab support).
try {
  window.db.enablePersistence({ synchronizeTabs: true }).catch(() => {});
} catch (e) {}
