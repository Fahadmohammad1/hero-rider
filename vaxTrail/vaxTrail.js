const vaxTrail = (arrOfObj) => {
  const result = arrOfObj.reduce((acc, cur) => {
    if (cur.age >= 20 && cur.age <= 30 && cur.temperature < 100) {
      if (!acc["A"]) {
        acc["A"] = [cur];
      } else {
        acc["A"].push(cur);
      }
    }
    if (cur.age >= 31 && cur.age <= 40 && cur.temperature < 100) {
      if (!acc["B"]) {
        acc["B"] = [cur];
      } else {
        acc["B"].push(cur);
      }
    }
    if (cur.age >= 41 && cur.age <= 50 && cur.temperature < 100) {
      if (!acc["C"]) {
        acc["C"] = [cur];
      } else {
        acc["C"].push(cur);
      }
    }
    if (cur.temperature >= 100) {
      if (!acc["D"]) {
        acc["D"] = [cur];
      } else {
        acc["D"].push(cur);
      }
    }
    return acc;
  }, {});

  for (const key in result) {
    const element = result[key];
    element.sort((a, b) => {
      if (a.age % 2 === 0 && b.age % 2 === 0) {
        return a - b;
      } else if (a.age % 2 === 0) {
        return -1;
      } else if (b.age % 2 === 0) {
        return 1;
      } else {
        return a.age - b.age;
      }
    });
  }
  return result;
};

console.log(
  vaxTrail([
    { name: "sunil", age: 21, temperature: 98 },
    { name: "Biplap", age: 22, temperature: 98 },
    { name: "kuddus", age: 24, temperature: 98 },
    { name: "Kabir", age: 36, temperature: 99 },
    { name: "Rahul", age: 37, temperature: 99 },
    { name: "Paul", age: 42, temperature: 98 },
    { name: "Kat", age: 41, temperature: 98 },
    { name: "Nayem", age: 50, temperature: 100 },
    { name: "Sabnaj", age: 51, temperature: 101 },
  ])
);
