document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.querySelector('#num1')
    const num2 = document.querySelector('#num2')
    const addBtn  = document.querySelector('#add')
    const subBtn = document.querySelector('#sub')
    const output = document.querySelector('#output')

    function getInputValues() {
        const value1 = +num1.value
        const value2 = parseInt(num2.value)

        return [value1, value2]
    }


    function addHandler() {
        const values = getInputValues()

        const result = values[0] + values[1]

        displayResult(result)
    }

    function subHandler() {

        const value = getInputValues()

      const result = value[0] - value[1]

        displayResult(result)
    }

    function displayResult(result) {
        output.closest('.card').style.display = 'block';
        output.innerHTML = `Результат = ${result}`
        console.trace()
    }

    // console.log('Test', addBtn)

    addBtn.addEventListener('click', addHandler)
    subBtn.addEventListener('click', subHandler)

})

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}, 5000)

