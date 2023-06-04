import { db } from "../config/firebase";
import { collection, getDocs, query } from "firebase/firestore"


//CONSULTA
export const getProducts = async() =>{
    const result = await getDocs(query(collection(db, 'producto')));
    // console.log(result)
    return result;
}



