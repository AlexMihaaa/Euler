(()=> {
  console.time("TIME")
  cycle: for (let a = 1; a <= 332; a++) {
    for (let b = a + 1; b <= 500; b++) {
      c = Math.sqrt(a**2 + b**2)
      if (c + a + b === 1000) break cycle;
    }
  }
console.timeEnd("TIME")
})()