const unitInput = document.getElementById("unit-input")
const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length")



convertBtn.addEventListener("click", function() {
    if (!isNaN(unitInput.value)) {
    calculateLength()
    calculateVolume()
    calculateMass()
    length.innerText = `${unitInput.value} meters = ${roundNumber(getConvertedMeters)} feet | ${unitInput.value} feet = ${roundNumber(getConvertedFeet)} meters`
    volume.innerText = `${unitInput.value} liters = ${roundNumber(getConvertedLiters)} gallons | ${unitInput.value} gallons = ${roundNumber(getConvertedGallons)} liters`
    mass.innerText = `${unitInput.value} kilograms = ${roundNumber(getConvertedKg)} pounds | ${unitInput.value} pounds = ${roundNumber(getConvertedPnd)} kilograms` 
    } else {
        length.innerText = ''
        volume.innerText = ''
        mass.innerText = ''
        unitInput.value = ""
    }
    
})

function calculateLength() {
    getConvertedMeters = unitInput.value * 3.281
    getConvertedFeet = unitInput.value / 3.281

}

function calculateVolume() {
    getConvertedLiters = unitInput.value / 4.546
    getConvertedGallons = unitInput.value * 4.546
}

function calculateMass() {
    getConvertedKg = unitInput.value * 2.205
    getConvertedPnd = unitInput.value / 2.205
}
function roundNumber(value) {
    return value.toFixed(3)
}