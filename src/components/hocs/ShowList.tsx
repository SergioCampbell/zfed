/* eslint-disable react-hooks/rules-of-hooks */
import React, { ComponentType, useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  getFirestore,
  updateDoc,
  doc,
} from "firebase/firestore";
import { DataPerson, IHoc } from "../../interfaces/interfaces";

export default function ShowList<T>(Component: ComponentType<IHoc>) {
  return (hocProps: T) => {
    const [data, setData] = useState<DataPerson[]>([] as DataPerson[]);

    useEffect(() => {
      try {
        const q = query(collection(getFirestore(), "data"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const result = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setData(result as unknown as DataPerson[]);
        });
        return () => unsubscribe();
      } catch (error) {
        alert(error);
      }
    }, []);  

    const updateByid = async (id: string, vote: "positive" | "negative") => {
      const profileFound = data.find((option) => option.id === id);
      if (profileFound) {
        profileFound[vote] = profileFound[vote] + 1;
        profileFound.lastUpdated = new Date().toISOString();
        const ref = doc(getFirestore(), "data", id);
        await updateDoc(ref, profileFound as any);
      }
    };

    return (
      <>
        {data.map((item: DataPerson, key: number) => (
          <Component
            data={item}
            key={key}
            updateByid={updateByid}
            {...hocProps}
          />
        ))}
      </>
    );
  };
}
