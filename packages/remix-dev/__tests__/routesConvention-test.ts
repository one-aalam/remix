import { createRoutePath } from "../config/routesConvention";

describe("createRoutePath", () => {
  describe("creates proper route paths", () => {
    let tests = [
      ["$", "*"],
      ["nested/$", "nested/*"],
      ["flat.$", "flat/*"],
      ["$slug", ":slug"],
      ["nested/$slug", "nested/:slug"],
      ["flat.$slug", "flat/:slug"],
      ["flat.sub", "flat/sub"],
      ["nested/index", "nested"],
      ["flat.index", "flat"],
      ["index", undefined],
      ["__layout/index", undefined],
      ["__layout/test", "test"],
      ["__layout.test", "test"],
      ["__layout/$slug", ":slug"],
      ["nested/__layout/$slug", "nested/:slug"]
    ];

    for (let [input, expected] of tests) {
      it(`"${input}" -> "${expected}"`, () => {
        expect(createRoutePath(input)).toBe(expected);
      });
    }
  });
});
