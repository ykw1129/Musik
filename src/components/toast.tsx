import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
type ToastProps = {
    position?: "top-right" | "top-center" | "top-left"
    autoClose?: number
}

function Toast({ position = "top-center", autoClose = 5000 }: ToastProps) {
    return (
        <ToastContainer
            position={position}
            autoClose={autoClose}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}

export default Toast