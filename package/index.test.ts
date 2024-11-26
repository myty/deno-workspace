import { assertEquals } from "@std/assert";
import { sharedMethod } from "./index.ts";

Deno.test(function sharedMethodTest() {
  assertEquals(sharedMethod("Hello, world!"), undefined);
});
