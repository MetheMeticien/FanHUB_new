"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./modal.css";

export default function Modal({ isOpen, onClose, children }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        
                    />
                    <motion.div
  className="modal-content"
  
>

                        <button className="modal-close" onClick={onClose}>X</button>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
