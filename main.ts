import { isNone, isSome, map, Option, some } from "./options";

const cubeNumber = (z: number): number => z ** 3;

const x = map(cubeNumber)(some(2));
console.log(x);
