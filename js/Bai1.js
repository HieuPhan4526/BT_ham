/**
 * Khối 1: 
 * diem1, diem2, diem3, diemChuan
 * 
 * Khối 2:
 * B1: tạo hàm tinhTongDiem
 * B2: lấy giá trị từ form
 * B3: Tính sum 
 *      
 *      sum = diemUuTienKhuVuc + diemUuTienDoiTuong + diem1 +diem2 +diem3
 * 
 *      kiểm tra đậu hay rớt
 *          
 *     
 * 
 * 
 * Khối 3: sum
 */


//! Bài làm

// const DiemKhuVucA = 2;

// const DiemKhuVucB = 1;

// const DiemKhuVucC = 0.5;

// const DiemDoiTuong1 = 2.5;
// const DiemDoiTuong2 = 1.5;
// const DiemDoiTuong3 = 1;

function tinhTongDiem() {
    var diemChuan = document.getElementById("numChuan").value;
    var diem1 = document.getElementById("num1").value;
    var diem2 = document.getElementById("num2").value;
    var diem3 = document.getElementById("num3").value;

    var diemKhuVuc = document.getElementById("area").value;
    var diemDoiTuong = document.getElementById("subject").value;

    diemChuan = Number(diemChuan);
    diem1 = Number(diem1);
    diem2 = Number(diem2);
    diem3 = Number(diem3);
    diemKhuVuc = Number(diemKhuVuc);
    diemDoiTuong = Number(diemDoiTuong);
    
    var xepLoai = "";

    xepLoai = kiemTra(diem1,diem2,diem3,diemKhuVuc,diemDoiTuong,diemChuan);


    var sum = tongDiem(diem1,diem2,diem3,diemKhuVuc,diemDoiTuong);

    document.getElementById("txtTinhTong").innerHTML = xepLoai + "<br> Tổng điểm " + sum;
}

function kiemTra(mon1,mon2,mon3,khuVuc,doiTuong,chuan) {
    if (mon1 <= 0 || mon2 <= 0 || mon3 <= 0) {
        return "Bạn đã rớt do có điểm nhỏ hơn hoặc bằng 0"
    }else{
        if ((mon1 + mon2 + mon3 + khuVuc + doiTuong) >= chuan) {
            return "Bạn đã đậu"
        }else{
            return "Bạn đã rớt"
        }
    }
    
}
function tongDiem(num1,num2,num3,numKhuVuc,numDoiTuong) {
    return num1 + num2 + num3 + numKhuVuc + numDoiTuong;
    
}



