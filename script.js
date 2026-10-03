function copyScript(script) {
    navigator.clipboard.writeText(script);

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}
