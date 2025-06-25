'use client';
import { BACKEND_URL } from '@/app/(auth)/signup/page';
import React, { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
    isAuthenticated: boolean;
    logout: () => void;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    userId: string
};


const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    logout: () => { },
    setIsAuthenticated: () => { },
    userId: ''
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        const token = localStorage.getItem('Authorization');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userProfile = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/user-profile`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setUserId(data.id);
            } catch (error) {
                console.log(error)
            }
        }
        if (token) userProfile();
    }, [isAuthenticated]);

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    }




    return (
        <AuthContext.Provider value={{ isAuthenticated, logout, setIsAuthenticated, userId }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);