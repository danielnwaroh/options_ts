// import { isNone, isSome, map, mapB, Option, some } from "./options";
// type User = {
//   id: number;
//   username: string;
// };

// const userOne = getUserById(1);
// const userTwo = some({ id: 10, username: "Daniel" });

// const getUserName = (u: User): string => u.username;

// function getUserById(id: number): Option<User> {
//   return some({ id: 1, username: "dan" });
// }

// const cubeNumber = <A>(z: A): A => z;

// const x = map(cubeNumber)(some([1, 2]));
// const x2 = mapB(cubeNumber, some([1, 2]));
// console.log(x);
// if (isSome(x)) {
//   console.log(x.value);
// }
// console.log(isSome(x));
