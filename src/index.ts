import { Person, Identifiable, Database } from "./types";
import createFactoryDatabase from "./factory";
import createSingletonDatabase from "./singleton";
import createObserverDatabase from "./observer";
import createVisitorDatabase from "./visitor";

// FACTORY
const PeopleFactoryDb = createFactoryDatabase<Person>();
const peopleFactoryDb = new PeopleFactoryDb();

peopleFactoryDb.set({
  id: "1",
  name: "bob factory",
  job: "bobber",
});

// console.log(peopleFactoryDb.get("1"));

// SINGLETON

const PeopleSingletonDb = createSingletonDatabase<Person>();

PeopleSingletonDb.instance.set({
  id: "2",
  name: "bob singleton",
  job: "bobber",
});

// console.log(PeopleSingletonDb.instance.get("2"));

// OBSERVER
const PeopleObserverDb = createObserverDatabase<Person>();

const unsubscribe = PeopleObserverDb.instance.onAfterAdd(({ value }) => {
  // console.log(value);
});

PeopleObserverDb.instance.set({
  id: "3",
  name: "bob observer",
  job: "bobber",
});

PeopleObserverDb.instance.set({
  id: "4",
  name: "jim",
  job: "jimmer",
});

unsubscribe();

PeopleObserverDb.instance.set({
  id: "4",
  name: "jim",
  job: "jimmer",
});

// VISITOR

const PeopleVisitorDb = createVisitorDatabase<Person>();

PeopleVisitorDb.instance.set({
  id: "1",
  name: "bob singleton",
  job: "bobber",
});

PeopleVisitorDb.instance.set({
  id: "2",
  name: "jim",
  job: "jimmer",
});

PeopleVisitorDb.instance.visit((item) => console.log(item.name));
