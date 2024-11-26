// tao 2 cai dt
let quan = new Phone("Quan");
let dung = new Phone("Dung");
// thu tren console
// tao moi doi tuong
// goi cac thuoc tinh va phuong thuc cua doi tuong

// ham de gui tin nhan cua quan cho Dung
function sendForDung() {
//     lay du lieu tu o input quan
    let mess = document.getElementById("quan").value;
//     quan soan thu nhap
    quan.writeDraft(mess);
//     gui thu cho dung
    quan.sendMess(dung);
//     Hien thi du lieu inbox cua dung
    document.getElementById("inboxDung").innerText =
        dung.inbox.join(";");
    document.getElementById("quan").value ="";
}
// ham de gui tin nhan cua quan cho Dung
function sendForQuan() {
//     lay du lieu tu o input quan
    let mess = document.getElementById("dung").value;
//     quan soan thu nhap
    dung.writeDraft(mess);
//     gui thu cho dung
    dung.sendMess(quan);
//     Hien thi du lieu inbox cua dung
    document.getElementById("inboxQuan").innerText =
        quan.inbox.join(";");
    document.getElementById("dung").value ="";
}
