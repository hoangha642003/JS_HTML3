//Viết chương trình JavaScript tính lãi suất ngân hàng theo công thức tính lãi đơn. Đầu vào là số tiền vay, lãi suất, số năm ( n ). Sau đó hiển thị kết quả của số tiền phải trả sau n năm.


const TIEN_VAY= 70;
let laisuat =prompt('ban nhap tien lai suat');
let n=2;
let q = (laisuat*n)+TIEN_VAY;
let message =('so tien phai tra sau n nam la:'+q)+'trieu dong'
console.log(message);
