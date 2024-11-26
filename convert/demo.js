function getAmount(){
    let amount = +document.getElementById('amount').value;
//     tinh ty gia
//     lay du lieu tu from va to
    let from = +document.getElementById('from').value;
    let to = +document.getElementById('to').value;
    let rate = from/to;
    let result = amount*rate;
// in ket qua ra
    document.getElementById('result').innerHTML = result;
}
