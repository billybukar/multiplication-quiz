const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const ten = document.getElementById('ten')

const onea = document.getElementById('answer1')
const twoa = document.getElementById('answer2')
const threea = document.getElementById('answer3')
const foura = document.getElementById('answer4')
const fivea = document.getElementById('answer5')
const sixa = document.getElementById('answer6')
const sevena = document.getElementById('answer7')
const eighta = document.getElementById('answer8')
const ninea = document.getElementById('answer9')
const tena = document.getElementById('answer10')
const inputEl = document.getElementsByTagName('input')
const scoreText = document.getElementById('scoreText')
const btn = document.getElementById('btn')
const btnreset = document.getElementById('btnreload')
const hint = document.getElementById('hint')
total = []

btn.addEventListener('click', function () {
    if (one.valueAsNumber === 10) {
        onea.textContent = 'Well Done'
        onea.setAttribute('class', 'correct')
        total.push(1)
    } else {
        onea.textContent = 'Try again'
        onea.setAttribute('class', 'incorrect')
        total.push(1)
        total.pop()
    }
})
btn.addEventListener('click', function () {
    if (two.valueAsNumber === 20) {
        twoa.textContent = 'Well Done'
        twoa.setAttribute('class', 'correct')
        total.push(2)

    } else {
        twoa.textContent = 'Try again'
        twoa.setAttribute('class', 'incorrect')
        total.push(1)
        total.pop()
    }
})
btn.addEventListener('click', function () {
    if (three.valueAsNumber === 30) {
        threea.textContent = 'Well Done'
        threea.setAttribute('class', 'correct')
        total.push(1)

    } else {
        threea.textContent = 'Try again'
        threea.setAttribute('class', 'incorrect')
        total.push(1)
        total.pop()
    }
})
btn.addEventListener('click', function () {
    if (four.valueAsNumber === 40) {
        foura.textContent = 'Well Done'
        foura.setAttribute('class', 'correct')
        total.push(1)

    } else {
        foura.textContent = 'Try again'
        foura.setAttribute('class', 'incorrect')
        total.push(1)
        total.pop()
    }
})
btn.addEventListener('click', function () {
    if (five.valueAsNumber === 50) {
        fivea.textContent = 'Well Done'
        fivea.setAttribute('class', 'correct')
        total.push(1)

    } else {
        fivea.textContent = 'Try again'
        fivea.setAttribute('class', 'incorrect')
        total.push(1)
        total.pop()
    }
})
btn.addEventListener('click', function () {
    if (six.valueAsNumber === 60) {
        sixa.textContent = 'Well Done'
        sixa.setAttribute('class', 'correct')
        total.push(1)

    } else {
        sixa.textContent = 'Try again'
        sixa.setAttribute('class', 'incorrect')
        total.push(1)
        total.pop()
    }
})
btn.addEventListener('click', function () {
    if (seven.valueAsNumber === 70) {
        sevena.textContent = 'Well Done'
        sevena.setAttribute('class', 'correct')
        total.push(1)

    } else {
        sevena.textContent = 'Try again'
        sevena.setAttribute('class', 'incorrect')
        total.push(1)
        total.pop()
    }
})
btn.addEventListener('click', function () {
    if (eight.valueAsNumber === 80) {
        eighta.textContent = 'Well Done'
        eighta.setAttribute('class', 'correct')
        total.push(1)

    } else {
        eighta.textContent = 'Try again'
        eighta.setAttribute('class', 'incorrect')
        total.push(1)
        total.pop()
    }
})
btn.addEventListener('click', function () {
    if (nine.valueAsNumber === 90) {
        ninea.textContent = 'Well Done'
        ninea.setAttribute('class', 'correct')
        total.push(1)

    } else {
        ninea.textContent = 'Try again'
        ninea.setAttribute('class', 'incorrect')
        total.push(1)
        total.pop()
    }
})
btn.addEventListener('click', function () {
    if (ten.valueAsNumber === 100) {
        tena.textContent = 'Well Done'
        tena.setAttribute('class', 'correct')
        total.push(1)

    } else {
        tena.textContent = 'Try again'
        tena.setAttribute('class', 'incorrect')
        total.push(1)
        total.pop()
    }
})
btn.addEventListener('click', function () {
    alert(`You Scored a Total of ${(total.length) * 10}`)
    if (total.length * 10 !== 100) {
        document.getElementById('hint').removeAttribute("id", "hint")
    }
    total = []

})

btnreset.addEventListener('click', function () {
    one.value = ''
    two.value = ''
    three.value = ''
    four.value = ''
    five.value = ''
    six.value = ''
    seven.value = ''
    eight.value = ''
    nine.value = ''
    ten.value = ''


    location.reload()
})