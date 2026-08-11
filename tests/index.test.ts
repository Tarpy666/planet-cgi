import { describe, expect, test } from "vitest";
import { MODULES } from "../src/index";
import { TransformGraph } from "../src/index";

describe("Planet CGI", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(3);
  });
  test("core behavior is deterministic", () => {
    const g = new TransformGraph();
const root = g.add(null, 2);
const mid = g.add(root, 3);
const tip = g.add(mid, 5);
expect(g.nodeCount()).toBe(3);
expect(g.worldPosition(tip)).toBe(10);
expect(g.worldPosition(mid)).toBe(5);
expect(g.depth(tip)).toBe(2);
expect(g.isAcyclic()).toBe(true);
  });
});