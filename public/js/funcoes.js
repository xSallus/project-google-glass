function changePicture(picture) {
    document.getElementById("icon").src = "../images/" + picture + ".png"
}

function show_total() {
    var qtd = parseInt(document.getElementById('cQtd').value)
    var tot = qtd * 1500
    document.getElementById('cTotal').value = tot
}

function submite() {
    alert('Pedido Enviado com Sucesso!')
}