import { ObjectId } from "mongodb";

export default class User {
    constructor(public name: string, public mail:string, public pass:string, public age: number, public course: string, public id?: ObjectId) {}
}