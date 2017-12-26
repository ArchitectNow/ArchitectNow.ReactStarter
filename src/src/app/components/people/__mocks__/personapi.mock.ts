import {Person} from "../../../models/person";

const people: Person[] = [
    new Person(),
    new Person()
];

export class PersonApi {

    getPeople(someParam: number): Promise<Person[]> {

        return new Promise((resolve, reject) => {
            process.nextTick(
                () =>
                    resolve(people)
            );
        });

    }
}