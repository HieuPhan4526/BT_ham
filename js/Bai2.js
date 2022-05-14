/**
 * input: ten, soKw
 * 
 * 
 * 
 * Các bước sử lý:
 * B1: tạo hàm tinhTienDien
 * B2: lấy giá trị từ form
 *      Lặp công thức tính toán
 *      Nếu 0 < soKw <= 50
 *          tienTra = soKw * Gia50KwDau
 *      Nếu soKw <= 100
 *          tienTra = 50 * Gia50KwDau + (soKw-50) * GiaKw50_100
 *      Nếu soKw <= 200
 *          tienTra = 50 * Gia50KwDau + 50 * GiaKw50_100 + (soKw - 100) *  GiaKw100_200
 *      Nếu soKw <= 350
 *          tienTra = 50 * Gia50KwDau + 50 * GiaKw50_100 + 100 *  GiaKw100_200 + (soKw - 200) * GiaKw200_350
 *      ngược lại
 *          tienTra = 50 * Gia50KwDau + 50 * GiaKw50_100 + 200 *  GiaKw100_200 +  (soKw - 350) * GiaKwTren_350 
 * 
 * 
 * 
 * output: tienTra
 */

//! Bài làm

const Gia50KwDau = 500;
const GiaKw50_100 = 650;
const GiaKw100_200 = 850;
const GiaKw200_350 = 1100;
const GiaKwTren_350 = 1300;


function tinhTienDien() {

    var ten = document.getElementById("hoTen").value;
    var soKw = document.getElementById("Kw").value;
    var tienTra = 0;

    tienTra = tinhTien(soKw,Gia50KwDau,GiaKw50_100,GiaKw100_200,GiaKw200_350,GiaKwTren_350);

    document.getElementById("txtTienDien").innerHTML = "Họ tên: " + ten + "<br> tiền phải trả: " + tienTra.toLocaleString();
}

function tinhTien(soKw,Gia50Kw,Gia100kw,Gia200kw,Gia350kw,GiaTren_350kw) {
    if (soKw <= 0 ) {
        alert ("Số kw không hợp lệ")
    }else{
        if (0 < soKw && soKw <= 50) {
            return soKw * Gia50Kw;
        }else if(soKw <= 100){
            return 50 * Gia50Kw + (soKw - 50) * Gia100kw;
        }else if(soKw <= 200){
            return 50 * Gia50Kw + 49 * Gia100kw + (soKw - 100) *  Gia200kw;
        }else if(soKw <= 350){
            return 50 * Gia50Kw + 49 * Gia100kw + 99 *  Gia200kw + (soKw - 200) * Gia350kw;
        }else if(soKw > 350){
            return 50 * Gia50KwDau + 49 * Gia100kw + 99 *  Gia200kw + 149 * Gia350kw * (soKw - 350) * GiaTren_350kw;
        }else{
            alert ("Số kw không hợp lệ")
        }
    }
    
}