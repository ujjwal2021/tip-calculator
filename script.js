const body = document.querySelector('body')
const calculateBtn = document.querySelector('#calculate')
const restartBtn = document.querySelector('#refresh')
calculateBtn.addEventListener('click', function(element) {
    var billAmount = parseFloat(document.getElementById('bill-amount').value)
    console.log(billAmount)
    var people = (document.getElementById('people-number').value)
    const percentage = parseFloat(document.getElementById('service').value)
        /* billAmount = parseInt(billAmount)
         people = parseInt(people)*/
    if (billAmount <= 0 || percentage == 0) {
        alert("Please enter required Values")
        return;
    }
    if (people <= 1 || people === "") {
        people = 1;
        document.getElementById('people-number').value = 1;
        /* alert("Number of people cannot be less than 1")
         return;*/
    }
    const totalAmountDiv = document.getElementById('amount')
    const totalTipDiv = document.getElementById('tip-amount')
    const singleTipDiv = document.getElementById('single-tip')
    const perPersonDiv = document.getElementById('per-person')
    document.getElementById('calculation').classList.remove('hidden')
    document.getElementById('button').style.margin = '10px';
    var tipAmount = (percentage * billAmount)
    Math.round(total * 100) / 100
    var division = (billAmount / people)
    var singleTip = (tipAmount / people)
    var perPerson = parseFloat(division + singleTip)

    var total = (billAmount + tipAmount)
    totalAmountDiv.innerHTML = total
    totalTipDiv.innerHTML = tipAmount
    singleTipDiv.innerHTML = singleTip
    perPersonDiv.innerHTML = perPerson

})

restartBtn.addEventListener('click', () => {
        location.reload();
    })
    /*
    function add(value1, value2) {
        return value1 + value2;
    }*/