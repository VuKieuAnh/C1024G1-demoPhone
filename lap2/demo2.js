let a = [11, 2, 3, 4, 5, 15, 100];
let value = +prompt('Nhập vào một số');
// neu ko tim thay thi index=-1;
let index = -1;
for (let i = 0; i < a.length; i++) {
    if(a[i]===value){
        // index chua vi tri phan tu neu co
        index = i;
        break;
    }
}
if(index==-1){
    console.log(`khong tim thay phan tu ${value} trong mang`)
}
else {
    console.log(`phan tu ${value} o vi tri thu ${index} trong mang`)
}
