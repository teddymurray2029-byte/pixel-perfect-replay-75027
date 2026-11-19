import { describe, expect, it } from "vitest";
import { catalog, filterCatalog } from "@/lib/playground-data";

describe("self-contained component catalog", () => {
  it("covers all requested foundation, component, and pattern categories", () => {
    expect(catalog.map(item => item.id)).toEqual(["typography","colors","layout","buttons","forms","cards","navigation","overlays","feedback","data","media","command","advanced","pricing","motion","responsive","dark","accessibility"]);
  });
  it("searches component types beyond the category name", () => {
    expect(filterCatalog("  CHECKBOX  ").map(item => item.id)).toEqual(["forms"]);
  });
  it("combines group and search filters", () => {
    expect(filterCatalog("button", "Foundations")).toEqual([]);
    expect(filterCatalog("button", "Components").map(item => item.id)).toEqual(["buttons"]);
  });
  it("offers an empty result for unknown terms", () => {
    expect(filterCatalog("nothing-matches-this-query")).toEqual([]);
  });
});