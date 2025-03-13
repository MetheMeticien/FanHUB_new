"use client";

import { createContext, useContext, useState } from "react";

interface User {
    imageUrl: string;
    name: string;
}

interface SelectedUserContextType {
    selectedUser: User | null;
    setSelectedUser: (user: User | null) => void;
}

const SelectedUserContext = createContext<SelectedUserContextType | undefined>(undefined);

export const useSelectedUser = () => {
    const context = useContext(SelectedUserContext);
    if (!context) {
        throw new Error("useSelectedUser must be used within a SelectedUserProvider");
    }
    return context;
};

export const SelectedUserProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    return (
        <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
            {children}
        </SelectedUserContext.Provider>
    );
};