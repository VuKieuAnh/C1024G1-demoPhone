// ham tinh phep nhan trc
function phepCong() {
//     lay du lieu tu 2 o a va b
//     cach khai bao bien var, let, const
//     lay du lieu tu o input, promt mac dinh la kieu chuoi
    let a = +document.getElementById("a").value;
    var b = + document.getElementById("b").value;
//     tinh toan phep nhan a*b
//     kieu du lieu cua bien la gi? co nhung loai nao?
//     phan biet bien va chuoi
//     liet ke cac loai toan tu
    c=a+b;
//     in ket qua ra
    document.getElementById("result").innerText = c;
}

// khai bao bien
// let, var: khong khac nhau, dam bao viec khai bao bien
// var: hoist, khai bao lai
// let: khong hoisting, khong khai bao lai => khuyen khich dung,
// khai bao moi su dung, khong khai bao trung ten bien

function demo(){
    let a1 =100;
    a2 =101;
}

// khai bao hang:
const PI = Math.PI;
// PI=100;
