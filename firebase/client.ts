import {  getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO5m1Q1JCdNks75QmaWnUC72OpiTRkbhQ",
  authDomain: "prepbot-sahil101.firebaseapp.com",
  projectId: "prepbot-sahil101",
  storageBucket: "prepbot-sahil101.firebasestorage.app",
  messagingSenderId: "1088357559244",
  appId: "1:1088357559244:web:6dee57e0f0edbb02becb69",
  measurementId: "G-HXNGFKXHZS",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

export const db = getFirestore(app);
