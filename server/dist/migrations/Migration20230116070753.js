"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230116070753 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230116070753 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "post" drop constraint "post_pkey";');
        this.addSql('alter table "post" rename column "_id" to "id";');
        this.addSql('alter table "post" add constraint "post_pkey" primary key ("id");');
    }
    async down() {
        this.addSql('alter table "post" drop constraint "post_pkey";');
        this.addSql('alter table "post" rename column "id" to "_id";');
        this.addSql('alter table "post" add constraint "post_pkey" primary key ("_id");');
    }
}
exports.Migration20230116070753 = Migration20230116070753;
//# sourceMappingURL=Migration20230116070753.js.map