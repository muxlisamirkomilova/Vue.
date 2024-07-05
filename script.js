// let users = [
//     {
//         name:"Muxlisa",
//         age: 17,
//         id: 1
//     },
//     {
//         name:"Davron",
//         age:22,
//         id:2
//     },
//     {
//         name:"Zafar",
//         age:25,
//         id:3
//     },
// ]

// users.forEach((el, index) =>console.log(el.name))

// let number = [5,10,15,20,25];

// let num = number.map((el, index)=> console.log())

// let users = [
//     {
//         id:1,
//         name:"Shaxriyor",
//         age:16,
//         city:"Tashkent",
//         gender:"male"
//     },
//     {
//         id:2,
//         name:"Robiya",
//         age:15,
//         city:"Tashkent",
//         gender:"female"
//     },
//     {
//         id:3,
//         name:"Ramz",
//         age:21,
//         city:"Termez",
//         gender:"male"
//     }
// ];
// for (let i = 0; i < users.length; i++) 
//     if (users[i].city === "Tashkent") {
//         filtered.push(users[i]);
//     }
//    console.log(filtered);
 



// let filtered = users.filter(element => element.city=="Tashkent")
// console.log(filtered);

// let users = [
//     {
//         id:1,
//         name:"Shaxriyor",
//         age:16,
//         city:"Tashkent",
//         gender:"male"
//     },
//     {
//         id:2,
//         name:"Robiya",
//         age:15,
//         city:"Tashkent",
//         gender:"female"
//     },
//     {
//         id:3,
//         name:"Ramz",
//         age:21,
//         city:"Termez",
//         gender:"male"
//     }
// ];

// let filtered = [];
// for (let i = 0; i < users.length; i++) {
//     if (users[i].city === "Tashkent") {
//         filtered.push(users[i]);
//     }
// }

// console.log(filtered);



// 11111
// map metodi yordamida berilgan massivning har bir elementini yangi obyektlarga aylantiramiz.
//  Yangi obyektning digit bo'limiga berilgan son, odd bo'limiga esa shu sonning toq yoki juftligi tekshiriladi 
// va natijada true yoki false qiymatlar qo'yiladi.
//  Natijiy yangi massiv newArray ga saqlanadi va uni konsolga chiqarish uchun console.log ishlatiladi.


// let numbers = [1, 2, 3, 5, 8, 9, 10];
// let newArray = [];

// for (let i = 0; i < numbers.length; i++) {
//     newArray.push({ digit: numbers[i], odd: numbers[i] % 2 !== 0 });
// }

// console.log(newArray);





// let numbers = [1, 2, 3, 5, 8, 9, 10];

// let newArray = numbers.map(num => {
//     return { digit: num, odd: num % 2 !== 0 };
// });

// console.log(newArray);




// 222222
// Bu kodda, reduce metodi yordamida berilgan massivning har bir elementini qo'shish orqali 
// umumiy yoshlarni hisoblaymiz. Keyin, umumiy yoshlar miqdorini massiv 
// uzunligiga bo'lib bo'lib o'rta-arifmetik qiymatni topamiz. Natijada, umumiy yoshlar va o'rta-arifmetik yoshni konsolga chiqaramiz.



// const arr = [
//     { name: "Вася", age: 25 },
//     { name: "Петя", age: 30 },
//     { name: "Маша", age: 29 }
// ];

// const totalAge = arr.reduce((acc, user) => acc + user.age, 0);
// const averageAge = totalAge / arr.length;

// console.log("Umumiy yoshlar: ", totalAge);
// console.log("O'rta-arifmetik yosh: ", averageAge);



// 33333
// getModifiedUsers nomli funktsiya yordamida berilgan massivni o'zgartirilgan yangi obyektlar bilan
// qaytaruvchi funksiya yaratamiz. map metodi yordamida har bir foydalanuvchining fullname va id ni 
// qo'shgan yangi obyektlar yaratiladi. Natijada, yangi obyektlarni konsolga chiqaramiz.

// let users = [
//     { name: "Вася", surname: "Пупкин", id: 1 },
//     { name: "Петя", surname: "Иванов", id: 2 },
//     { name: "Маша", surname: "Петрова", id: 3 }
// ];

// function getModifiedUsers(users) {
//     return users.map(user => {
//         return {
//             fullname: user.name + " " + user.surname,
//             id: user.id
//         };
//     });
// }

// let modifiedUsers = getModifiedUsers(users);
// console.log(modifiedUsers);




// 44444
// sort metodini ishlatib, massivni o'zgartirib chiqamiz. 
// sort metodida funksiya berilgan, bu funksiya massivlar o'rtasida taqqoslashni bajaradi. 
// a.length - b.length ni o'zgaruvchilarga o'rganganimizda, massivlar uzunligi bo'yicha taqqoslash amalga oshadi.
//  Natijada, massivlar o'zgaruvchisini konsolga chiqaramiz.


// let arrays = [
//     [14, 45],
//     [1],
//     ['a', 'c', 'd']
// ];

// arrays.sort((a, b) => a.length - b.length);

// console.log(arrays);



// let array = [
//     [14, 45],
//     [1],
//     ['a', 'c', 'd']
// ];

// for (let i = 0; i < arrays.length; i++) {
//     for (let j = i + 1; j < arrays.length; j++) {
//         if (arrays[i].length > arrays[j].length) {
//             let temp = arrays[i];
//             arrays[i] = arrays[j];
//             arrays[j] = temp;
//         }
//     }
// }

// console.log(arrays);


// 55555
// sort metodini ishlatib obyektlar massivini o'zgartirib chiqamiz. 
// sort metodida funksiya berilgan, bu funksiya obyektlar o'rtasida taqqoslashni bajaradi.
// a.info.cores - b.info.cores ni o'zgaruvchilarga o'rganganimizda, obyektlarni cores maydoni bo'yicha taqqoslaymiz.
//  Natijada, yangi tartiblangan obyektlarni konsolga chiqaramiz


// let objects = [
//     {cpu: 'intel', info: {cores: 2, cache: 3}},
//     {cpu: 'intel', info: {cores: 4, cache: 4}},
//     {cpu: 'amd', info: {cores: 1, cache: 1}},
//     {cpu: 'intel', info: {cores: 3, cache: 2}},
//     {cpu: 'amd', info: {cores: 4, cache: 2}}
// ];

// objects.sort((a, b) => a.info.cores - b.info.cores);

// console.log(objects);


// let objects = [
//     {cpu: 'intel', info: {cores: 2, cache: 3}},
//     {cpu: 'intel', info: {cores: 4, cache: 4}},
//     {cpu: 'amd', info: {cores: 1, cache: 1}},
//     {cpu: 'intel', info: {cores: 3, cache: 2}},
//     {cpu: 'amd', info: {cores: 4, cache: 2}}
// ];

// for (let i = 0; i < objects.length; i++) {
//     for (let j = i + 1; j < objects.length; j++) {
//         if (objects[i].info.cores > objects[j].info.cores) {
//             let temp = objects[i];
//             objects[i] = objects[j];
//             objects[j] = temp;
//         }
//     }
// }

// console.log(objects);



// bu qism yozuv uchun
// const button = document.getElementById('colorButton');
// const header = document.getElementById('header');

// let isBlack = true;

// button.addEventListener('click', function() {
//     if (isBlack) {
//         header.style.color = 'red'; // 2-qizil rang
//     } else {
//         header.style.color = 'black'; // 1-qora rang
//     }

//     isBlack = !isBlack;
// });

// const blueButton = document.getElementById('blueButton')
// const blackButton = document.getElementById('blackButton');
// const redButton = document.getElementById('redButton');
// const header = document.getElementById('header');

// blackButton.addEventListener('click', function() {
//     header.style.backgroundColor = 'black';
//     header.style.color = 'white';
// });

// redButton.addEventListener('click', function() {
//     header.style.backgroundColor = 'red';
//     header.style.color = 'white';
// });
// blueButton.addEventListener('click', function() {
//     header.style.backgroundColor = 'blue';
//     header.style.color = 'white';
// });



// const passwordInput = document.getElementById('password');
// const showPasswordButton = document.getElementById('showPasswordButton');
// const passwordOutput = document.getElementById('passwordOutput');

// showPasswordButton.addEventListener('click', function() {
//     const password = passwordInput.value;
//     passwordOutput.textContent = "Siz yozgan parol: " + password;
// });
function getLocationFromPhoneNumber(phoneNumber) {
    const phonePrefix = phoneNumber.substring(0, 4); // Telefon raqamning birinchi 4 belgisini olish
    let location = "Noma'lum joy";
    let coordinates = "";

    if (phonePrefix === '+998') {
        // Telefon raqamida +998 bo'lsa, joylashuvni aniqroq aniqlash
        const regionCode = phoneNumber.substring(4, 6); // Tuman kodi
        const districtCode = phoneNumber.substring(6, 9); // Mahalla kodi

        // Joylashuvni aniqlash
        switch (regionCode) {
            case '71':
                location = "Toshkent shahri";
                coordinates = "41.3111, 69.2797"; // Toshkent shahri koordinatalari
                break;
            case '72':
                location = "Toshkent viloyati";
                coordinates = "41.3775, 69.2769"; // Toshkent viloyati koordinatalari
                break;
            // Boshqa tumanlar uchun kerakli joylashuvlarni qo'shing
            default:
                location = "Noma'lum joy";
                break;
        }

        // Mahalla kodi bo'lsa, mahallani ham qo'shing
        if (districtCode) {
            location += ", Mahalla: " + districtCode;
        }
    }

    return { location, coordinates };
}

function showLocation() {
    const phoneNumber = document.getElementById("phoneInput").value;
    const { location, coordinates } = getLocationFromPhoneNumber(phoneNumber);

    if (location) {
        document.getElementById("locationOutput").innerText = "Joylashuv: " + location;

        if (coordinates) {
            document.getElementById("coordinatesOutput").innerText = "Koordinatalar: " + coordinates;
        } else {
            document.getElementById("coordinatesOutput").innerText = "Koordinatalar topilmadi";
        }
    } else {
        document.getElementById("locationOutput").innerText = "Xatolik: Joylashuv aniqlanmadi";
    }
}


