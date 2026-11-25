
let sp = [
    {ten:"Điện thoại", icon:"📱"},
    {ten:"Laptop", icon:"💻"},
    {ten:"Tai nghe", icon:"🎧"},
    {ten:"Bàn phím", icon:"⌨️"},
    {ten:"Chuột máy tính", icon:"🖱️"}
];

function show(arr) {
    let list = document.getElementById("list");
    list.replaceChildren();

    arr.forEach(x => {
        let div = document.createElement("div");
        div.className = "item";

        let icon = document.createElement("span");
        icon.textContent = x.icon;

        div.append(icon, x.ten);
        list.appendChild(div);
    });
}

function searchProduct() {
    let key = document.getElementById("search").value.trim().toLowerCase();
    let kq = sp.filter(x => x.ten.toLowerCase().includes(key));

    show(kq);
    document.getElementById("msg").textContent =
        kq.length ? "" : "Không tìm thấy sản phẩm!";
}

show(sp);
