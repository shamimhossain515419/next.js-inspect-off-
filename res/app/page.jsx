
const InspectOffNextJs = () => {



    //   Disable Right-click
    useEffect(() => {
        const disableRightClick = (e) => {
            e.preventDefault();
        };

        window.addEventListener("contextmenu", disableRightClick);

        return () => {
            window.removeEventListener("contextmenu", disableRightClick);
        };
    }, []);

    // Block Developer Tools keyboard shortcuts
    useEffect(() => {
        const blockDevTools = (e) => {
            if (
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && e.key === "I") ||
                (e.ctrlKey && e.key === "U")
            ) {
                e.preventDefault();
                alert("Developer tools are disabled.");
            }
        };

        window.addEventListener("keydown", blockDevTools);

        return () => {
            window.removeEventListener("keydown", blockDevTools);
        };
    }, []);

    // Detect Developer Tools and Close or Alert
    useEffect(() => {
        const detectDevTools = () => {
            const threshold = 160; // Adjust this threshold value to detect DevTools based on the window size
            const isDevToolsOpen =
                window.innerWidth - document.documentElement.clientWidth > threshold ||
                window.innerHeight - document.documentElement.clientHeight > threshold;

            if (isDevToolsOpen) {
                alert("Developer tools are disabled.");
                // Optionally reload or close the window if you prefer to forcefully prevent further access
                window.location.reload();
            }
        };

        // Monitor window resize
        window.addEventListener("resize", detectDevTools);

        // Initial check
        detectDevTools();

        return () => {
            window.removeEventListener("resize", detectDevTools);
        };
    }, []);

    return (<>

        <div> {children} </div>



    </>)

}

export default InspectOffNextJs;