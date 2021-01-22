//exercise 1================================================================================================================================
let divisi = 'HR';
divisi == 'HR' ?
console.log("Tugas saya adalah melakukan rekrutmen") :
divisi == 'Karyawan' ?
console.log("Tugas saya adalah melakukan pekerjaan") :
divisi == 'OB' ?
console.log("Tugas saya adalah melakukan kebersihan") :
console.log("Tugas saya apaan ya ?");


//exercise 2================================================================================================================================
let a = 3;
let b = 7;
a < b ?
console.log("a lebih kecil dari b") :
a > b ?
console.log("a lebih besar dari b") :
console.log("a sama dengna b");


//exercise 3================================================================================================================================
let hari = 1;

switch (hari) {
    case 1 :
        console.log("Hari Minggu");
        break;
    case 2 :
        console.log("Hari Senin");
        break;
    case 3 :
        console.log("Hari Selasa");
        break;
    case 4 :
        console.log("Hari Rabu");
        break;
    case 5 :
        console.log("Hari Kamis");
        break;
    case 6 :
        console.log("Hari Jumat");
        break;
    case 7 :
        console.log("Hari Sabtu");
        break;
    default :
        console.log("Kelebihan Hari");
};


//exercise 4================================================================================================================================
document.addEventListener('keydown', function(event) {
    switch(event.keyCode){
        case 37 :
            console.log("Karakter berjalan kekiri");
            break;
        case 38 :
            console.log("Karakter berjalan keatas");
            break;
        case 39 :
            console.log("Karakter berjalan kekanan");
            break;
        case 40 :
            console.log("Karakter berjalan kebawah");
            break;
        default :
            console.log(event.key);
    }
});