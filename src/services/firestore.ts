import { db } from '../config/firebase';
import { collection, addDoc, getDoc, doc, setDoc } from 'firebase/firestore';

export const saveSeva = async (data:any) => {
  await addDoc(collection(db,'sevas'), data);
};

export const saveProfile = async (uid:string, data:any) => {
  await setDoc(doc(db,'users',uid), data);
};

export const getProfile = async (uid:string) => {
  const ref = doc(db,'users',uid);
  const snap = await getDoc(ref);
  return snap.data();
};
