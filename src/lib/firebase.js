import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// Configuração do Firebase Web SDK
const firebaseConfig = {
  apiKey: "AIzaSyAR0lgr0PO05zvSo5vRnnE190RqjbGyamQ", // Placeholder - precisa ser configurado
  authDomain: "collisionlabs-cb323.firebaseapp.com",
  projectId: "collisionlabs-cb323",
  storageBucket: "collisionlabs-cb323.appspot.com",
  messagingSenderId: "906190944870", // Placeholder - precisa ser configurado
  appId: "1:906190944870:web:98d011588f80eda840cba7" // Placeholder - precisa ser configurado
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Inicializar serviços
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

export default app

