/**
 * Buatlah kode pemrograman untuk menampilkan deret angka sebagai berikut, sebanyak nilai yang diinput oleh user:

0 1 4 9 16 25 36 49 64 81 100 dst...
1 2 5 10 17 26 37 50 65 82 dst...
0 1 1 2 3 5 8 13 21 34 55 dst...
0 0 1 2 4 7 12 20 33 54 dst...
 */

function deretAngka(n) {
  // your code here
  let result = "";
  let count = 0;
  let count2 = 1;
  let count3 = 0;
  let count4 = 0;
  for (let i = 0; i < n; i++) {
    result += count + " ";
    count += count2;
    count2++;
  }
  console.log(result);
  result = "";
  for (let i = 0; i < n; i++) {
    result += count3 + " ";
    count3 += count4;
    count4++;
  }
  console.log(result);
  result = "";
  let fibo = [0, 1];
  for (let i = 0; i < n; i++) {
    result += fibo[i] + " ";
    fibo.push(fibo[i] + fibo[i + 1]);
  }
  console.log(result);
  result = "";
  let count5 = 0;
  let count6 = 0;
  let count7 = 1;
  for (let i = 0; i < n; i++) {
    result += count5 + " ";
    count5 += count6;
    count6 = count7;
    count7++;
  }
  console.log(result);
}

deretAngka(10);
