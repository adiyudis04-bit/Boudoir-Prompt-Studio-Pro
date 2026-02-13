function generatePrompts(event) {
    event.preventDefault();

    const artist = document.getElementById("artist").value;
    const pose = document.getElementById("pose").value;
    const outfit = document.getElementById("outfit").value;

    const base = `${artist}, ${pose}, ${outfit}, volumetric light, highly detailed face, smooth skin, correct anatomy, 8k --ar 9:16`;

    document.getElementById("cinematic").value =
        `Cinematic lighting, dramatic atmosphere, low angle shot, deep shadows, moody color grading, DSLR 85mm lens, f/1.4, sharp focus, award-winning photography, ${base}`;

    document.getElementById("realistic").value =
        `High-end studio photography, soft natural key lighting, ultra realistic skin texture, pore details, subtle HDR, sharp focus, photo taken by Annie Leibovitz, ${base}`;

    document.getElementById("painting").value =
        `Oil painting style, classical baroque lighting, Chiaroscuro technique, thick impasto brush strokes, renaissance composition, highly detailed texture, painted by John Singer Sargent, ${base}`;

    document.getElementById("cinematic").focus();
}

function copyPrompt(targetId, buttonElement) {
    const targetElement = document.getElementById(targetId);
    if (targetElement && targetElement.value) {
        navigator.clipboard.writeText(targetElement.value).then(() => {
            const originalIcon = buttonElement.innerHTML;
            buttonElement.innerHTML = '<span class="text-green-400 text-xs font-bold">Copied!</span>';
            
            setTimeout(() => {
                buttonElement.innerHTML = originalIcon;
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('prompt-form');
    if (form) form.addEventListener('submit', generatePrompts);

    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            copyPrompt(targetId, button);
        });
    });
});
