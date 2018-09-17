function converteData(date) {
    return Date(date);
}

function now() {
    return new Date().toLocaleDateString()
}

function nowPlus5Days() {
    var date = new Date()
    date.setDate(date.getDate() + 5);
    return date.toLocaleDateString();
}

function total(items) {
    var sum = 0
    items.forEach(function (i) {
        i.servicos.forEach(function (i2) {
            sum += parseFloat(i2.valorRecebido)
        })
    })
    return sum
}

function subtotal(items) {
    var sum = 0
    items.forEach(function (i) {
        console.log('Calculating item ' + i.name + '; you should see this message in debug run')
        sum += parseFloat(i.valorRecebido)
    })
    return sum
}