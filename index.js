// if -> <,>,<=,>=,==,===
// switch -> ===
 
// let data = "qor"
// switch(data){
//     case "yomg'ir":
//         console.log("bugun yomg'ir");
//         break;
//         case "qor":
//         console.log("bugun qor");
//         default:
//         console.log("no data");
// }

// for(boshlanish,manzil,step)
// var sum = 0;
// for(i = 1; i < 12; i = i + 2) {
// //     console.log(`Sum = ${sum} + ${i} = ${(sum += i)}`);
// //     if (sum === 10)
// //     console.log(i);
// // i += i;
// if (i % 2 === 0) console.log(`juft son ${i}`);
// else console.log(`toq son {i}`);
// }

// var sum = 0;
// for (i = 10; i >= 1; i--) {
//     for(j = 1; j <= 10; j++) {
//         console.log(j);
//     }
// }

// outer: for (i = 10; i >= 1; i -= 3) {
//     inner: for(j = 1; j <= 10; j+= 3) {
//       if (i === 4)  break outer;
//         console.log(j,"j");
//     }
//     console.log(i, "i"); 
// }

outer: for (i = 1; i >= 5; i++) {
    inner: for(j = 1; j <= 5; j++) {
      if (i === 4)  break;
        console.log(j,"j");
    }
    console.log(i, "i"); 
}
