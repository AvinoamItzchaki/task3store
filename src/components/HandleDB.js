// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, query, getDocs, deleteDoc, where, updateDoc } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyARM7hd7DpaD1F3QHnEp5iiA77_SvWqGgY",
    authDomain: "task3shop.firebaseapp.com",
    projectId: "task3shop",
    storageBucket: "task3shop.firebasestorage.app",
    messagingSenderId: "128266362924",
    appId: "1:128266362924:web:869e998761eb5453813189",
    measurementId: "G-816SWHK9N6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const collectionName = 'task3store';

const AddItemToDB = async (image, title, price) => {
    const q = query(
        collection(db, collectionName),
        where('title', '==', title)
    )
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
        const docSnapshot = querySnapshot.docs[0];
        const docRef = docSnapshot.ref;
        const data = {
            count: docSnapshot.data().count + 1
        }
        await updateDoc(docRef, data);
        return;
    }
    await addDoc(collection(db, collectionName), {
        image,
        title,
        price,
        count: 1
    })
}
const GetItems = async () => {
    const q = query(collection(db, collectionName));
    const querySnapshot = await getDocs(q);
    const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return items;
}
const ClearCollection = async () => {
    const querySnapshot = await getDocs(collection(db, collectionName));

    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));

    await Promise.all(deletePromises);
}

export { AddItemToDB, GetItems, ClearCollection };






// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries