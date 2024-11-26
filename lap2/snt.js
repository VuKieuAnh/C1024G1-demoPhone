let n = +prompt("Moi ban nhap vao so n?");
let result = "";
if (n<2){
    result= `${n} khong phai snt`
}
else if (n<=3){
    result= `${n} la snt`;
}
else{
//     dem cac uoc cua n
    let check=true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n%i==0){
            // thoat khoi vong lap luon
            // count++;
            result = `${n} khong phai snt`;
            check=false;
            break

        }
    }
    if (check){
        result = `${n} snt`;
    }
    // if (count==0){
    //     result=`${n} la snt`;
    // }
    // else {
    //     result=`${n} khong la snt`;
    // }
}
document.write(result)
//can chuan bi testcase: cac truong hop can kiem tra
// n=0 => 0
// n=-1 => 0
// n=1 => 0
// n=2 => 1
// n=3 => 1
// n=4 => 0
//n=10 => 0
//n=7 => 1
//n=11 => 1
//n=13 => 1
// 5
//6
