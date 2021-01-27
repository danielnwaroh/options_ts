import { Option, isNone, isSome, some, none, map } from "../options";

describe("Option testing", () => {
  const testr = (val: number): Option<string> => {
    if (val > 10) {
      return some("Number too high!");
    } else {
      return none();
    }
  };

  const cubeNumber = (z: number): number => z ** 3;

  it("should be some", () => {
    const val = isSome(testr(15));
    expect(val).toBe(true);
  });

  it("should return 8", () => {
    const val = map(cubeNumber)(some(2));

    expect(isSome(val)).toBe(true);
  });
});
