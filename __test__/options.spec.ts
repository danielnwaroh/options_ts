import { Option, isNone, isSome, some, none } from "../options";

describe("Option testing", () => {
  const testr = (val: number): Option<string> => {
    if (val > 10) {
      return some("Number too high!");
    } else {
      return none();
    }
  };
  it("should be some", () => {
    const val = isSome(testr(15));
    expect(val).toBe(true);
  });
});
