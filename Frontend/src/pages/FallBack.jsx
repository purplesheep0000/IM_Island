import { useEffect } from "react";

function ErrorBoundary() {
    const url = "https://pt-fr-production.up.railway.app/"
    
    useEffect(() => {
        window.location.href = url;
    }, [])

    return (
        <div className="bg-sky-900 w-full h-screen flex justify-center items-center flex-col">
            <h1 className="text-white">Error</h1>
        </div>
    );
}

export default ErrorBoundary;