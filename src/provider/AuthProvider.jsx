/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const googleAuthProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  //   signUp using email and password
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signIn user using email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   signIn user using google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  //   signOut user
  const customSignOut = () => {
    return signOut(auth);
  };

  // update profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        await axiosPublic.post("/users", {
          email: currentUser?.email,
          name: currentUser?.displayName,
          image: currentUser?.photoURL,
        });
      }

      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signUp,
    signIn,
    googleSignIn,
    signOut: customSignOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
