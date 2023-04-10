const res = document.querySelector('.res')
const input = document.getElementById('ipx')
const btnCovert = document.getElementById('btnConvert')

async function copyToRem() {
    if (btnCovert.textContent === 'Copy') {
        btnCovert.textContent = 'Copied'
        try {
            await navigator.clipboard.writeText(res.textContent);
        } catch {
            console.log('Erro ao copiar');
        }
    }
}

function toConvert() {
    const rem = input.value * 0.0625
    res.textContent = `${rem}rem`
    btnCovert.textContent = 'Copy'
}

input.addEventListener('keydown', function (ev) {
    if (ev.key === "Enter") {
        toConvert();
    }
})

input.addEventListener('focus', () => {
    btnCovert.textContent = "CONVERTER"
})

btnCovert.addEventListener('click', copyToRem)
document.getElementById('btnConvert').addEventListener('click', toConvert)