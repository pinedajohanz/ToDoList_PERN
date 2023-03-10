import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("todos", (table) => {
        table
            .uuid("id")
            .primary()
            .notNullable()
            .defaultTo(knex.raw("uuid_generate_v4()"))
        
        table.string("title").notNullable();

        // each time we create a new record in the db it sets to false boolean
        table.boolean("done").notNullable().defaultTo("false");

        table.timestamp("created_at").notNullable();
        table.timestamp("updated_at").notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("todos");
}

