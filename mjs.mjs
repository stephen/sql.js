// Note that this is import()'d as a cjs module because this build
// only does module.exports. If the file ext is js, import() gets confused.
const Module = await import("./dist/sql-wasm.cjs");
const m = await Module.default()

export const Database = m.Database;
