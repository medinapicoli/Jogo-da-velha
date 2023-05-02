const boardRegions = document.querySelectorAll('#board span')
const vBoard = []
let turnPlayer = ''

function upDateTitle() {
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
}