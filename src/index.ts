import { Person, Identifiable, Database } from "./types";
import createFactoryDatabase from "./factory";
import createSingletonDatabase from "./singleton";
import createObserverDatabase from "./observer";

// factory pattern
const PeopleFactoryDb = createFactoryDatabase<Person>();
const peopleFactoryDb = new PeopleFactoryDb();

peopleFactoryDb.set({
  id: "1",
  name: "bob factory",
  job: "bobber",
});

// console.log(peopleFactoryDb.get("1"));

// singleton
const PeopleSingletonDb = createSingletonDatabase<Person>();

PeopleSingletonDb.instance.set({
  id: "2",
  name: "bob singleton",
  job: "bobber",
});

// console.log(PeopleSingletonDb.instance.get("2"));

// observer
const PeopleObserverDb = createObserverDatabase<Person>();

PeopleObserverDb.instance.onAfterAdd(({ value }) => {
  console.log(
    `added person :  id : ${value.id}. name : ${value.name}. job : ${value.job}.`
  );
});

PeopleObserverDb.instance.set({
  id: "3",
  name: "bob observer",
  job: "bobber",
});
