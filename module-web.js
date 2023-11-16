import * as wasm from "./dist/sql-wasm-module-web.js"

const def = await wasm.default();

export const Database = def.Database;
