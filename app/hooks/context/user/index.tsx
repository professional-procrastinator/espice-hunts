import React, { useState, useContext, createContext, useEffect } from "react";

const Context = createContext(null);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<ErrorInterface>(null!);

  useEffect(() => {}, []);
}

interface ErrorInterface {
  message: string;
  status: number;
  timestamp: number;
}
