function calculateTraiangleArea(){
    // get triangle base
    const baseField = document.getElementById('triangle-base');
    const baseValue = parseFloat(baseField.value);
    // get triangle height 
    const heightField = document.getElementById('triangle-height');
    const heightValue = parseFloat(heightField.value);
    baseField.value = '';
    heightField.value = '';
    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('Please Insert a Number');
        return;
    }
    // calculate area
    const area = 0.5 * heightValue * baseValue;
    // show triangle area 
    const areaSpan =  document.getElementById('triangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('Triangle', area);
}

function calculateRectangulareArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValue = parseFloat(widthField.value);
    const lengthField = document.getElementById('rectangle-length');
    const lengthValue = parseFloat(lengthField.value);
    widthField.value = '';
    lengthField.value = '';
    if(isNaN(widthValue) || isNaN(lengthValue)){
        alert('Please Insert a Number');
        return;
    }
    // calculate area
    const area = widthValue * lengthValue;
    // show rectangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('Rectangle', area);
}

function calculatePArea(){
    // get base
    const baseField = document.getElementById('Parallelogram-base');
    const baseValue = parseFloat(baseField.value);
    // get  height 
    const heightField = document.getElementById('Parallelogram-height');
    const heightValue = parseFloat(heightField.value);
    baseField.value = '';
    heightField.value = '';
    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('Please Insert a Number');
        return;
    }
    // calculate area
    const area = baseValue * heightValue;
    // show area 
    const areaSpan =  document.getElementById('Parallelogram-area');
    areaSpan.innerText = area;
    addToCalculationEntry('Parallelogram', area);
}

function calculateRhombusArea(){
    const d1 = getInputvalue('rhombus-d1')
    const d2 = getInputvalue('rhombus-d2')
    if(isNaN(d1) || isNaN(d2)){
        alert('Please Insert a Number');
        return;
    }
    const area = 0.5 * d1 * d2;
    setTextFieldText('rhombus-area', area);
    addToCalculationEntry('Rhombus', area);
}

function calculatePentagonArea(){
    const pValue = getInputvalue('p-value');
    const bValue = getInputvalue('b-value');
    if(isNaN(pValue) || isNaN(bValue)){
        alert('Please Insert a Number');
        return;
    }
    const area = 0.5 * pValue * bValue;
    setTextFieldText('pentagon-area', area);
    addToCalculationEntry('Pentagon', area);
}

function calculateEllipseArea(){
    const aValue = getInputvalue('a-value');
    const baseValue = getInputvalue('bs-value')
    console.log(baseValue);
    if(isNaN(aValue) || isNaN(baseValue)){
        alert('Please Insert a Number')
    }
    const area = 3.1416 * aValue * baseValue;
    const areaFixed = area.toFixed(3);
    setTextFieldText('ellipse-area', areaFixed);
    addToCalculationEntry('Ellipse', areaFixed);
}
// reusaable get function
function getInputvalue(fieldID){
    const inputField = document.getElementById(fieldID);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

// reuseable set value function
function setTextFieldText(setId, area){
    const setFieldValue = document.getElementById(setId);
    setFieldValue.innerText = area;
}

// add to calculation entry
function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-5');
    p.classList.add('ml-6');
    p.classList.add('text-lg');
    p.classList.add('font-medium');
    p.classList.add('text-fuchsia-700');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup>`;
    calculationEntry.appendChild(p);
}