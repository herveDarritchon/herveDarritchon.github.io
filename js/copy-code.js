// static/js/copy-code.js
document.addEventListener("click", async (e) => {
    const btn = e.target.closest(".codeblock__copy");
    if (!btn) return;

    const code = btn.closest(".codeblock")?.querySelector("pre code");
    if (!code) return;

    const text = code.textContent.replace(/\n$/, "");

    try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = "Copy"), 900);
    } catch (err) {
        btn.textContent = "Failed";
        setTimeout(() => (btn.textContent = "Copy"), 900);
    }
});
