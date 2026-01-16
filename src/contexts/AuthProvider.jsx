import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContexts";
import { auth } from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const singInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const AuthInfo = {
    loading,
    user,
    setUser,
    singInGoogle,
    logOut
  };
  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
