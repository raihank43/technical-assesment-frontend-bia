function generateSeries(n) {
  let series1 = [];
  let series2 = [];
  let series3 = [0, 1];
  let series4 = [0, 0, 1];

  for (let i = 0; i < n; i++) {
    // Series 1: 0, 1, 4, 9, 16, ...
    series1.push(i * i);

    // Series 2: 1, 2, 5, 10, 17, ...
    series2.push(i * i + 1);

    // Series 3: 0, 1, 1, 2, 3, 5, 8, ...
    if (i >= 2) {
      series3.push(series3[i - 1] + series3[i - 2]);
    }

    // Series 4: 0, 0, 1, 2, 4, 7, ...
    if (i >= 3) {
      series4.push(series4[i - 1] + series4[i - 2] + series4[i - 3]);
    }
  }

  console.log("Series 1:", series1.join(" "));
  console.log("Series 2:", series2.join(" "));
  console.log("Series 3:", series3.join(" "));
  console.log("Series 4:", series4.join(" "));
}

generateSeries(10);
