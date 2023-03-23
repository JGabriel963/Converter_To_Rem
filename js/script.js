const res = document.querySelector('.res')

document.getElementById('btnConvert').addEventListener('click', () => {
    const pixel = document.getElementById('ipx').value;
    const rem = pixel * 0.0625
    res.textContent = `${rem}rem`
})