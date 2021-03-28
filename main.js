const keys = document.querySelectorAll('.key');
const keysboard = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL']
keys.forEach(key => {
    key.addEventListener('mousedown', () => playSound(key))
})
keys.forEach(key => {
    window.addEventListener('mouseup', () => stopSound(key))
})


document.addEventListener('keydown', e => {

    if (e.repeat) return
    const key = e.code
    const keyIndex = keysboard.indexOf(key)
    if (keyIndex > -1) playSound(keys[keyIndex])
})
document.addEventListener('keyup', e => {
    const key = e.code
    const keyIndex = keysboard.indexOf(key)
    if (keyIndex > -1) stopSound(keys[keyIndex])
})

function playSound(key) {
    const song = document.getElementById(key.dataset.sound)
    song.currentTime = 0
    song.play()
    key.classList.add('selected')
    song.addEventListener('ended', () => {
        key.classList.remove('selected')
    })
}

function stopSound(key) {
    const song = document.getElementById(key.dataset.sound)
    song.pause()
    song.currentTime = 0;
    key.classList.remove('selected')
}
console.log('hi');