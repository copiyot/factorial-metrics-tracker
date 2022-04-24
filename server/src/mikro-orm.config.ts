import { __prod__ } from "./constants";
import { Token } from "./entities/Token";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        glob: '!(*.d).{js,ts}',
    },
    entities:[Token],
    dbName: 'factorial',
    type: 'postgresql',
    user: 'copiyot',
    debug: !__prod__,
    allowGlobalContext: true
} as Parameters<typeof MikroORM.init>[0];