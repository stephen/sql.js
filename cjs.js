const def = await require("./dist/sql-wasm.cjs")
const inner = await def()

export const Database = inner.Database;
