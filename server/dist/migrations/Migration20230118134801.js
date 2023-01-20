"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230118134801 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230118134801 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" text not null, "password" text not null);');
        this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
    }
    async down() {
        this.addSql('drop table if exists "user" cascade;');
    }
}
exports.Migration20230118134801 = Migration20230118134801;
//# sourceMappingURL=Migration20230118134801.js.map