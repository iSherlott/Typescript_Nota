const objectA: {
  keyA: string;
  keyB: string;
  keyC?: number;
  [key: string]: unknown;
} = {
  keyA: "Valor A",
  keyB: "Valor B",
};

objectA.keyD = "Valor D";

console.log(objectA);

const objectB = {
  keyA: "New A",
  keyB: "",
};

objectB.keyB = "New B";

console.log(objectB);
