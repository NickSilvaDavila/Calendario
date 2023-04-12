function colorirDia(){
    let days    = document.getElementById('day').value;
    let color   = document.getElementById('color').value;
    let calendar   = document.getElementById('calendar').value;
    let td     = calendar.getElementsByTagName('td')[PerseInt(days)+5];
    td.style.backgroundColor = color;
}

