let content="";
for (let i = 1; i < 10; i++) {
//     viet the tr
    content+=`<tr>`
    for (let j = 1; j < 10; j++) {
        // them the td
        // content+=`<td>x</td>`
        // content+=`<td>${i} * ${j}</td>`
        content+=`<td>${j}*${i}=${j*i}</td>`
        // dong the td
    }
//     dong the tr
    content+=`</tr>`
}
document.getElementById("content").innerHTML = content;
