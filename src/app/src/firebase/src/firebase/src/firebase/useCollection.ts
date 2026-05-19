import { useEffect, useState } from 'react';
import { onSnapshot, Query } from "firebase/firestore";

export function useCollection(query: Query | null) {
  const [data, setData] = useState<any[]>(null);

  useEffect(() => {
    if (!query) return;
    const unsub = onSnapshot(query, snapshot =>
      setData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    );
    return () => unsub();
  }, [query]);

  return { data };
}
