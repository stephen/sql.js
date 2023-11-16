const Module = await import("./dist/sql-wasm.js");
const m = await Module.default()

export const Database = m.Database;
