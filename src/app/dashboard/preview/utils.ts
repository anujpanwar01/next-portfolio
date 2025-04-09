export function loadScript(url: string, type) {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${url}"]`)) return resolve("Already exist"); // Prevent duplicate loading

        const script = document.createElement("script");
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        if (type) {
            script.type = type;
        }

        document.body.appendChild(script);
    });
}
