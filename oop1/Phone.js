class Phone {
    name; battery; sent; inbox; draft;


    constructor(name) {
        this.name = name;
        this.battery = 50;
        this.sent = [];
        this.inbox = [];
        this.draft = "";
    }

//     gui tin nhan
//     ten ham: sendMess
//     tham so: 1 dt khac
//     nhiem vu: chuyen thu nhap vao hop thu den cua dt nhan,
//     them thu nhap vao thu da gui cua dt nay
//     clearn thu nhap
//     tra ve: void
    sendMess(newPhone){
        newPhone.inbox.push(this.draft);
        this.sent.push(this.draft);
        this.draft = "";
    }

//     soan thu nhap
    writeDraft(newMessage){
        this.draft = newMessage;
    }
}
