//bai1
// var a = Number(prompt("Nhap chieu cao"));
// var b = Number(prompt("Nhap can nang"));
// var bmi = b/(Math.pow(a,2));
// if (bmi < 18) {
//     document.write("Underweight");
//  } else if (bmi < 25.0) {
//     document.write("Normal");
//  } else if (bmi < 30.0) {
//     document.write("Overweight");
//  } else {
//     document.write("Obese");
//  }
//bai2
// var month = Number(prompt("Nhap vao thang"));
// switch(month){
//     case 1: alert("Thang 1 co 31 ngay"); break;
//     case 2: alert("Thang 2 co 28 ngay"); break;
//     case 3: alert("Thang 3 co 30 ngay"); break;
//     case 4: alert("Thang 4 co 31 ngay"); break;
//     case 5: alert("Thang 5 co 30 ngay"); break;
//     case 6: alert("Thang 6 co 31 ngay"); break;
//     case 7: alert("Thang 7 co 30 ngay"); break;
//     case 8: alert("Thang 8 co 31 ngay"); break;
//     case 9: alert("Thang 9 co 30 ngay"); break;
//     case 10: alert("Thang 10 co 31 ngay"); break;
//     case 11: alert("Thang 11 co 30 ngay"); break;
//     case 12: alert("Thang 12 co 31 ngay"); break;
//     default: alert("Khong co thang nay");
// }
//bai 3
// var a = prompt("Moi ban nhap vao so a");
// var b = prompt("Moi ban nhap vao so b");
// var c = prompt("Moi ban nhap vao cac phep tinh(+,-,*,/");
// switch(c){
//     case "+": alert("ket qua cua a + b =" +(+a + +b)); break;
//     case "-": alert("ket qua cua a - b =" +(+a - +b)); break;
//     case "*": alert("ket qua cua a * b =" +(+a * +b)); break;
//     case "/": alert("ket qua cua a / b =" +(+a / +b)); break;
//     default: alert("Khong co phep tinh nao phu hop"); 
// }
//bai4
// var a = prompt("Nhap vao so a");
// var b = prompt("Nhap vao so b");
// var c = prompt("Nhap vao so c");
// var max = +a;
// max = (max> +b)?max: +b;
// max = (max> +c)?max: +c;
// var min = +a;
// min = (min< +b)?min: +b;
// min = (min< +c)?min: +c;
// alert(" So max la " +max+ " So min la: "+min );
//bai5
    // var ngay = Number(prompt("Moi ban nhap so ngay"));
    // var thang = Number(prompt("Moi ban nhap so thang"));
    // if((ngay < 0  || ngay >  32) || (thang < 0 || thang >12) || (thang== 2 && ngay >29)){
    //     alert("Ngay thang k hop le");
    // }else{
    //     switch(thang){
    //         case 1: if(ngay<20 && ngay>0){
    //                     alert("Cung Ma Ket");
    //                 }else{
    //                     alert("Cung Bao Binh");
    //                 } break;
    //         case 2: if(ngay<18 && ngay>0){
    //                     alert("Cung Bao Binh");
    //                 }else{
    //                     alert("Cung Song Ngu");
    //                 } break;
    //         case 3: if(ngay<21 && ngay>0){
    //                     alert("Cung Song Ngu");
    //                 }else{
    //                     alert("Cung Bach Duong");
    //                 } break;   
    //         case 4: if(ngay<20 && ngay>0){
    //                     alert("Cung Bach Duong");
    //                 }else{
    //                     alert("Cung Kim Nguu");
    //                 } break;
    //         case 5: if(ngay<21 && ngay>0){
    //                     alert("Cung Kim Nguu");
    //                 }else{
    //                     alert("Cung Song Tu");
    //                 } break;
    //         case 6: if(ngay<22 && ngay>0){
    //                     alert("Cung Song Tu");
    //                 }else{
    //                     alert("Cung Cu Giai");
    //                 } break;
    //         case 7: if(ngay<23 && ngay>0){
    //                     alert("Cung Cu Giai");
    //                 }else{
    //                     alert("Cung Su Tu");
    //                 } break;
    //         case 8: if(ngay<23 && ngay>0){
    //                     alert("Cung Su Tu");
    //                 }else{
    //                     alert("Cung Xu Nu");
    //                 } break;
    //         case 9: if(ngay<23 && ngay>0){
    //                     alert("Cung Xu Nu");
    //                 }else{
    //                     alert("Cung Thien Binh");
    //                 } break;
    //         case 10:if(ngay<24 && ngay>0){
    //                     alert("Cung Thien Binh");
    //                 }else{
    //                     alert("Cung Bo Cap");
    //                 } break;
    //         case 11:if(ngay<22 && ngay>0){
    //                     alert("Cung Bo Cap");
    //                 }else{
    //                     alert("Cung Nhan Ma");
    //                 } break;
    //         case 12:if(ngay<22 && ngay>0){
    //                     alert("Cung Nhan Ma");
    //                 }else{
    //                     alert("Cung Ma Ket");
    //                 } break;
    //         default: alert("K hop le");
    //     }
    // }
// Decision Making
//bai 1
// var a = prompt("Nhap vao so tuoi");
// if(+a >18){
//     alert("Tren 18t");
// }else{
//     alert("Chua du 18t");
// }
//bai 2
// var a = prompt("Nhap vao so gio");
// if(+a >=0 && +a <24){
//     if(+a >18){
//         alert("Good Evening");
//     }else{
//         alert("Chua Day");
//     }
// }
//bai 3
// var a = Number(prompt("Nhap so gio"));
// if(a>0 && a < 10){
//     alert("good morning");
// }
// else if(a >= 10 && a<20){
//     alert("good day");
// }else{
//     alert("good evening");
// }
//bai 4
// var a = prompt("Nhap vao so bat ky");
// if(+a %2 ==0){
//     alert(a +" la so chan");
// }else{
//     alert(a +" la so le");
// }
//bai 5
// var a = prompt("Nhap vao so bat ky");
// var b = 0;
// if(+a %2 ==0){
//     b = 1;
// }
// switch(b){
//     case 0:  alert(a +" la so le"); break;
//     case 1:  alert(a +" la so chan"); break;
//     default: alert("Khong hop le");
// }
//bai 6
// var a = prompt("Nhap mau sac");
// if(a=="xanh" || a=="do" || a=="vang"){
//     alert(a);
// }else{
//     alert("mau khong hop le");
// }
//bai 7
// var a = prompt("Nhap so nguyen x");
// if(+a ==0){
//     alert(a +" = 0");
// }
// else if(+a <0){
//     alert(a +" la so nguyen am");
// }else{
//     alert(a +" la so nguyen duong");
// }
//bai 9
// let mang = [];
// var sum =0;
// alert("Nhap cac mon theo thu tu Toan,Li,Hoa,Van,Su,Dia");
// for(var i=1;i<=6;i++){
//     var diem = Number(prompt("Nhap diem mon thu " +i));
//     mang.push(i);
// }
// for(var i =0;i<mang.length;i++){
//     sum += mang[i];
// }
// var dtb = sum/mang.length;
// document.write(dtb);
// if(dtb >= 8 && dtb <=10){
//     alert("Gioi");
// }
// else if(dtb >= 6.5 && dtb <= 7.9){
//     alert("Kha");
// }
// else if(dtb >= 5.0 && dtb <= 6.4){
//     alert("Trung Binh");
// }else if(dtb <5.0){
//     alert("Yeu");
// }
