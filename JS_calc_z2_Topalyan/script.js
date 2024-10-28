const disp = document.getElementById('disp');
const historyDiv = document.getElementById('history');

function appendValue(value) {
    disp.value += value;
}

function calculate() {
    try {
        const result = eval(disp.value);
        addHistory(`${disp.value} = ${result}`);
        disp.value = result;
    } catch (error) {
        disp.value = 'Ошибка';
    }
}

function clearDisplay() {
    disp.value = '';
}

function addHistory(entry) {
    const newEntry = document.createElement('div');
    newEntry.textContent = entry;
    historyDiv.append(newEntry);
}
