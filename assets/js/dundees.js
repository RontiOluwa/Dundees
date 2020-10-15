document.addEventListener('DOMContentLoaded', () => {
    const bgElems = document.querySelectorAll('[data-bgImage]');
    const svgElems = document.querySelectorAll('[data-fillColor]');

    setBgImage(bgElems);
    setColor(svgElems, 'fill');
});