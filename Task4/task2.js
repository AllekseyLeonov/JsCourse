function makeDroids() {
  const droids = [];
  // var --> let
  for (let i = 0; i < 10; i += 1) {
    const droid = () => {
      console.log(`D${i}`);
    };
    droids.push(droid);
  }
  return droids;
}

for (const d of makeDroids()) {
  d();
}
