// Hàm lấy giá trị ID của thẻ html 
function domID(id) {
    return document.getElementById(id);
}

//================================BT1=====================================

domID('btnTangDan').onclick = function() {
    // Input: Number
    var soNguyen1 = Number(domID('soNguyen1').value) ; 
    var soNguyen2 = Number(domID('soNguyen2').value) ;
    var soNguyen3 = Number(domID('soNguyen3').value) ;
    var max; //biến tạm
    if ( soNguyen1 > soNguyen2) {   //nếu soNguyen1 > soNguyen2 đúng (nếu sai thì ko làm gì)
        max = soNguyen1;            //gán max = soNguyen1
        soNguyen1 = soNguyen2;      //đổi chỗ của soNguyen1 qua vị trí soNguyen2
        soNguyen2 = max;            //gán max = soNguyen2
    }
    if ( soNguyen1 > soNguyen3) {   //nếu soNguyen1 > soNguyen3 đúng (nếu sai thì ko làm gì)
        max = soNguyen1;            //gán max = soNguyen1
        soNguyen1 = soNguyen3;      //đổi chỗ của soNguyen1 qua vị trí soNguyen3
        soNguyen3 = max;            //gán max = soNguyen3
    }
    if (soNguyen2 > soNguyen3) {    //nếu soNguyen2 > soNguyen3 đúng ( nếu sai thì ko làm gì )
        max = soNguyen2;            //gán max = soNguyen2
        soNguyen2 = soNguyen3;      //đổi chỗ của soNguyen2 qua vị trí soNguyen3
        soNguyen3 = max;            //gán max = soNguyen3
    }
    // OutPut: Number
    domID('ketQua').innerHTML = soNguyen1 + ' , ' + soNguyen2 + ' , ' + soNguyen3;
}

//================================BT2=====================================

domID('btnNhapTen').onclick = function() {
    // Input:
    var loiChao = domID('loiChao');
    var nhapTen = domID('nhapTenNguoiDung').value;
    // Progress:
    switch (nhapTen) {
        case ('B') : {
           loiChao.innerHTML = 'Hi Daddy !!!';      // Output
           break;
        }
        case ('M') : {
            loiChao.innerHTML = 'Hi Mommy !!!';     // Output
            break;
        }
        case ('A') : {
            loiChao.innerHTML = 'Hi Brother !!!';   // Output
            break;
        }
        case ('E') : {
            loiChao.innerHTML = 'Hi Sister !!!';    // Output
            break;
        }
        default: {
            loiChao.innerHTML = ' Who are You? ';   // Output
        }
    }
}

//================================BT3=====================================

domID('btnChanLe').onclick = function() {
    // Input: Number
    var soNguyen_1 = Number(domID('soNguyen-1').value) ; 
    var soNguyen_2 = Number(domID('soNguyen-2').value) ;
    var soNguyen_3 = Number(domID('soNguyen-3').value) ;
    var soChan = 0;
    var soLe = 0;
    // Progress:
    if (soNguyen_1 % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    if (soNguyen_2 % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    if (soNguyen_3 % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    // Output
    domID('xuatChanLe').innerHTML = 'Số chẵn có: ' + soChan + ' , ' + 'Số lẻ có: ' + soLe ;
}

//================================BT4=====================================

domID('btnTamGiac').onclick = function() {
    //Input: Number
    var canhA = Number(domID('canhA').value);
    var canhB = Number(domID('canhB').value);
    var canhC = Number(domID('canhC').value);
    var ketQua = domID('loaiTamGiac');
    // Progress:
    if ((canhA + canhB > canhC) && (canhA + canhC > canhB) && (canhC + canhB > canhA) && (canhA > 0) && (canhB > 0) && (canhC > 0)) {
        if (canhA == canhB && canhA == canhC && canhB && canhC) {
            ketQua.innerHTML = 'Tam giác đều';      // Output
        } else if (canhA == canhB || canhA == canhC || canhB == canhC) {
            ketQua.innerHTML = 'Tam giác cân';      // Output
        } else if ( (Math.pow(canhA, 2) + Math.pow(canhB, 2) == Math.pow(canhC, 2)) || (Math.pow(canhA, 2) + Math.pow(canhC, 2) == Math.pow(canhB, 2)) || (Math.pow(canhC, 2) + Math.pow(canhB, 2) == Math.pow(canhA, 2)) ) {
            ketQua.innerHTML = 'Tam giác vuông'     // Output
        } else if ( ((Math.pow(canhA, 2) + Math.pow(canhB, 2) == Math.pow(canhC, 2)) && (canhA == canhB) ) ||
                    ((Math.pow(canhA, 2) + Math.pow(canhC, 2) == Math.pow(canhB, 2)) && (canhA == canhC) ) ||
                    ((Math.pow(canhC, 2) + Math.pow(canhB, 2) == Math.pow(canhA, 2)) && (canhB == canhC) ) ) {
            ketQua.innerHTML = 'Tam giác vuông cân' // Output
        } else {
            ketQua.innerHTML = 'Tam giác thường';   // Output
        }
    } else {
        ketQua.innerHTML = 'không đủ điều kiện tạo thành tam giác'; // Output
    }
}

//================================BT1=====================================

// Hàm tính ngày trước đó & ngày kế tiếp có giá trị trả về
function ThePreviousDay(day, month, year) {   
    // progress:
    var thePreviousDay = new Date(year, (month-1), (day-1));
    // OutPut:
    return document.getElementById('resultNextDay').innerHTML = thePreviousDay;
}
function TheNextDay(day, month, year) {   
    // progress:
    var theNextDay = new Date(year, (month-1), (day+1));
    // OutPut:
    return document.getElementById('resultNextDay').innerHTML = theNextDay;
}
// Hàm Chính xử lý bài toán
document.getElementById('btnNextDay').onclick = function() {
    // Input:
    var inputDay = Number(document.getElementById('inputDay').value); 
    var inputMonth = Number(document.getElementById('inputMonth').value); 
    var inputYear = Number(document.getElementById('inputYear').value); 
    // console.log(inputDay, inputMonth, inputYear )
    // progress:
    if (inputYear == '' && inputMonth == '' && inputDay == '') {
        // Output:
        document.getElementById('resultNextDay').innerHTML = 'Vui lòng nhập ngày, tháng, năm !!!';
    }  else {
        var thePreviousDay = ThePreviousDay(inputDay, inputMonth, inputYear); 
        var theNextDay = TheNextDay(inputDay, inputMonth, inputYear); 
        // OutPut:
        document.getElementById('resultNextDay').innerHTML = 'Ngày tiếp theo là: ' + theNextDay + ' </br> ' + 'Ngày trước đó là: ' + thePreviousDay;
    } 
}
//================================BT2=====================================

// Hàm lấy ra số ngày của 1 tháng bất kỳ
function daysOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
// Hàm chính xử lý bài toán
document.getElementById('btnDay').onclick = function() {
    // Input:
    var inputMonth2 = Number(document.getElementById('inputMonth2').value);
    var inputYear2 = Number(document.getElementById('inputYear2').value);
    // console.log(inputMonth2, inputYear2);
    // Progress:
    if (inputMonth2 == '' && inputYear2 == '') {
        // Output
        document.getElementById('resultDay').innerHTML = 'Vui lòng nhập tháng và năm !!!'
    } else if (inputYear2 % 4 == 0 && inputYear2 % 100 !=0 ) {
        var days = daysOfMonth(inputYear2, inputMonth2);
        // Output:
        document.getElementById('resultDay').innerHTML = ' Số ngày của tháng ' + inputMonth2 + ' năm ' + inputYear2 + ' là: ' + days + ' ngày. <br>'
         + 'Năm ' + inputYear2 + ' là Năm Nhuận.';
    } else {
        var days = daysOfMonth(inputYear2, inputMonth2);
        // Output:
        document.getElementById('resultDay').innerHTML = ' Số ngày của tháng ' + inputMonth2 + ' năm ' + inputYear2 + ' là: ' + days + ' ngày.';
    }
}

//================================BT3=====================================

document.getElementById('btnDoc').onclick = function() {
    //Input:
    var soNguyen3ChuSo = Number(document.getElementById('soNguyen3ChuSo').value);
    //Progress:
    var hundreds = Math.floor(soNguyen3ChuSo / 100);
    var dozens = Math.floor(soNguyen3ChuSo % 100 / 10);
    var units = soNguyen3ChuSo % 100 % 10;
        // đọc số hàng trăm
        switch (hundreds) {
            case (1) : {
                hundreds = 'Một Trăm';
                break;
            }
            case (2) : {
                hundreds = 'Hai Trăm';
                break;
            }
            case (3) : {
                hundreds = 'Ba Trăm';
                break;
            }
            case (4) : {
                hundreds = 'Bốn Trăm';
                break;
            }
            case (5) : {
                hundreds = 'Năm Trăm';
                break;
            }
            case (6) : {
                hundreds = 'Sáu Trăm';
                break;
            }
            case (7) : {
                hundreds = 'Bảy Trăm';
                break;
            }
            case (8) : {
                hundreds = 'Tám Trăm';
                break;
            }
            case (9) : {
                hundreds = 'Chín Trăm';
                break;
            }
            case (0) : {
                hundreds = '';
                break;
            }
        }
        // đọc số hàng chục
        switch (dozens) {
            case (1) : {
                dozens = 'Mười';
                break;
            }
            case (2) : {
                dozens = 'Hai Mươi';
                break;
            }
            case (3) : {
                dozens = 'Ba Mươi';
                break;
            }
            case (4) : {
                dozens = 'Bốn Mươi';
                break;
            }
            case (5) : {
                dozens = 'Năm Mươi';
                break;
            }
            case (6) : {
                dozens = 'Sáu Mươi';
                break;
            }
            case (7) : {
                dozens = 'Bảy Mươi';
                break;
            }
            case (8) : {
                dozens = 'Tám Mươi';
                break;
            }
            case (9) : {
                dozens = 'Chín Mươi';
                break;
            }
            case (0) : {
                dozens = 'Lẻ';
                break;
            }
        }
        // đọc số hàng đơn vị
        switch (units) {
            case (1) : {
                units = 'Mốt';
                break;
            }
            case (2) : {
                units = 'Hai';
                break;
            }
            case (3) : {
                units = 'Ba';
                break;
            }
            case (4) : {
                units = 'Bốn';
                break;
            }
            case (5) : {
                units = 'Năm';
                break;
            }
            case (6) : {
                units = 'Sáu';
                break;
            }
            case (7) : {
                units = 'Bảy';
                break;
            }
            case (8) : {
                units = 'Tám';
                break;
            }
            case (9) : {
                units = 'Chín';
                break;
            }
            case (0) : {
                units = '';
                break;
            }
        }
        // đọc số 'mười một' & 'lẻ một'
        if ((units == 'Mốt' && dozens == 'Mười') || (units == 'Mốt' && dozens == 'Lẻ')) {
            units = 'Một';
        }  
        // đọc số 001
        if ( hundreds == '' && dozens == 'Lẻ') {
            dozens = '';
        }      
    // Output: 
    document.getElementById('cachDoc').innerHTML = hundreds + ' ' + dozens + ' ' + units;
}

//================================BT4=====================================

document.getElementById('btnXaNhat').onclick = function() {
    // Input:
    var tungDoTruong = Number(document.getElementById('tungDoTruong').value);
    var hoanhDoTruong = Number(document.getElementById('hoanhDoTruong').value);
    console.log(tungDoTruong, hoanhDoTruong);
    var tenSV1 = document.getElementById('tenSV1').value;
    var tungDoSV1 = Number(document.getElementById('tungDoSV1').value);
    var hoanhDoSV1 = Number(document.getElementById('hoanhDoSV1').value);
    console.log(tenSV1, tungDoSV1, hoanhDoSV1);
    var tenSV2 = document.getElementById('tenSV2').value;
    var tungDoSV2 = Number(document.getElementById('tungDoSV2').value);
    var hoanhDoSV2 = Number(document.getElementById('hoanhDoSV2').value);
    console.log(tenSV2, tungDoSV2, hoanhDoSV2);
    var tenSV3 = document.getElementById('tenSV3').value;
    var tungDoSV3 = Number(document.getElementById('tungDoSV3').value);
    var hoanhDoSV3 = Number(document.getElementById('hoanhDoSV3').value);
    console.log(tenSV3, tungDoSV3, hoanhDoSV3);
    // Progress:
    var d1 = Number(Math.sqrt( Math.pow(tungDoSV1 - tungDoTruong,2) + Math.pow(hoanhDoSV1 - hoanhDoTruong,2) ));
    var d2 = Math.sqrt( Math.pow(tungDoSV2 - tungDoTruong,2) + Math.pow(hoanhDoSV2 - hoanhDoTruong,2) );
    var d3 = Math.sqrt( Math.pow(tungDoSV3 - tungDoTruong,2) + Math.pow(hoanhDoSV3 - hoanhDoTruong,2) );    
    var max, min;
    if ( d1 > d2 && d1 > d3) {
        max = d1;
        document.getElementById('xaNhat').innerHTML = 'Sinh viên xa trường nhất là: ' + tenSV1;
    } else if ( d2 > d1 && d2 > d3) {
        max = d2;
        document.getElementById('xaNhat').innerHTML = 'Sinh viên xa trường nhất là: ' + tenSV2;
    } else if ( d3 > d1 && d3 > d2) {
        max = d3;
        document.getElementById('xaNhat').innerHTML = 'Sinh viên xa trường nhất là: ' + tenSV3;
    } 
    if (d1 < d2 && d1 < d3) {
        min = d1;
        document.getElementById('ganNhat').innerHTML = 'Sinh viên gần trường nhất là: ' + tenSV1;
    } else if (d2 < d3 && d2 < d1) {
        min = d2;
        document.getElementById('ganNhat').innerHTML = 'Sinh viên gần trường nhất là: ' + tenSV2;
    } else if (d3 < d2 && d3 < d1) {
        min = d3;
        document.getElementById('ganNhat').innerHTML = 'Sinh viên gần trường nhất là: ' + tenSV3;
    }
}