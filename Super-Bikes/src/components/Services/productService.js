// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase (reemplaza con tus datos de configuración)
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén la instancia de Firestore
const db = getFirestore(app);

export { db };
