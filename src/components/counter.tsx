"use client";

import { useState } from "react";
import {useAuth, useUser} from "@clerk/nextjs";

export function Counter() {
    const [count, setCount] = useState(0);
    
    // on peut utiliser useAuth de même useUser pour obtenir des informations sur l'utilisateur connecté ou pas et faire disparaitre le compteur si l'utilisateur n'est pas connecté
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    // const { isLoaded, isSignedIn, user } = useUser();


    if (!isLoaded || !userId) {
        return null; // or a loading spinner
    }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}