import {Model} from "objection";

export class Todo extends Model {
    // let model know that todos is a table
    static get tableName() {
        return "todos";
    }

    id!: string;
    title!: string;
    done!: boolean;

    createdAt!: string;
    updatedAt!: string;

    // timestamps inside our db
    $beforeInsert() {
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }
    $beforeUpdate() {
        this.updatedAt = new Date().toISOString();
    }
}