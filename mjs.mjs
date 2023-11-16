const Module = await import("./dist/sql-wasm.cjs");
// const m = await Module();
const m = await Module.default()

export const Database = m.Database;
