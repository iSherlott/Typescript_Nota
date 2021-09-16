const dataClient: readonly [number, string] = [27, "Sherlott"];
const dataClient1: [number, string] = [27, "Sherlott"];
const dataClient2: [number, string, string] = [27, "Sherlott", "Da Silva"];
const dataClient3: [number, string, string?] = [27, "Sherlott"];
const dataClient4: [number, string, ...string[]] = [27, "Sherlott", "Da Silva"];

dataClient1[0] = 0;
dataClient1[1] = "No Name";

console.log(dataClient);
console.log(dataClient1);
console.log(dataClient2);
console.log(dataClient3);
console.log(dataClient4);
