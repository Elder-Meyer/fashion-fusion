import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";


//ALTA
export const saveSettingsApp =  (primaryColorLight, primaryColor, primaryColorDark, secondaryColorLight, secondaryColor, secondaryColorDark) => {
    addDoc(collection(db, 'settingsApp'), {
        primaryColorLight,
        primaryColor,
        primaryColorDark,

        secondaryColorLight,
        secondaryColor,
        secondaryColorDark,
    });
}

//ACTUALIZAR
export const updateSettingsApp = async(id, primaryColorLight, primaryColor, primaryColorDark, secondaryColorLight, secondaryColor, secondaryColorDark) =>{
    await updateDoc(doc(db, 'settingsApp', id), {
        primaryColorLight,
        primaryColor,
        primaryColorDark,

        secondaryColorLight,
        secondaryColor,
        secondaryColorDark,
    });
}
