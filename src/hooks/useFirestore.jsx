import { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, getFirestore } from 'firebase/firestore';

const useFirestore = (collectionName, id, isCollection = true) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const firestore = getFirestore();
                if (isCollection) {
                    const collectionRef = collection(firestore, collectionName);
                    const querySnapshot = await getDocs(collectionRef);
                    const dataArr = [];
                    querySnapshot.forEach((doc) => {
                        dataArr.push({ id: doc.id, ...doc.data() });
                    });
                    setData(dataArr);
                } else {
                    const docRef = doc(firestore, collectionName, id);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setData({ id: docSnap.id, ...docSnap.data() });
                    } else {
                        console.log('No such document!');
                    }
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data from Firestore: ', error);
            }
        };

        fetchData();
    }, [collectionName, id, isCollection]);

    return { data, loading };
};

export default useFirestore;
