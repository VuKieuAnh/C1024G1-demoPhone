class Rectangle {
    weight; height;

    // ham khoi tao doi tuong


    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }

    getS(){
        return this.height*this.weight;
    }
    getP(){
        return 2*(this.height+this.weight);
    }

}
// ban mo ta lop trc
// khai bao lop
// tao doi tuong: tu khoa new
let thiepcuoi = new Rectangle(15, 20);
// su dung phuong thuc cua doi tuong: <ten doi tuong>.<ten phuong thuc()>
console.log(thiepcuoi.getP());
