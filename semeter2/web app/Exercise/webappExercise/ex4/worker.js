function worker() {
  const colorList = [
    "aqua",
    "red",
    "green",
    "yellow",
    "chartreuse",
    "darkorchid",
    "lightBlue",
  ];

  let colorIndex = 0;

  postMessage({ date: Date(), color: colorList[colorIndex] });
  colorIndex = (colorIndex + 1) % colorList.length;

  setInterval(() => {
    postMessage({ date: Date(), color: colorList[colorIndex] });
    colorIndex = (colorIndex + 1) % colorList.length;
  }, 1000);
}

worker();
