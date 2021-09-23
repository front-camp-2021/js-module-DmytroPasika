import { splitAndMerge } from "./index.js";

describe("splitAndMerge", () => {
  it("should satisfy the following conditions", () => {
    const result1 = splitAndMerge("Hello World!", ",");
    expect(result1).toEqual("H,e,l,l,o W,o,r,l,d,!");

    const result3 = splitAndMerge("Hello World!", "_"); // переіменував дублікат
    expect(result3).toEqual("H_e_l_l_o W_o_r_l_d_!"); // переіменував дублікат

    const result2 = splitAndMerge(" ", ".");
    expect(result2).toEqual(" ");
  });
});
