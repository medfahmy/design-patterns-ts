export interface Person {
  id: string;
  name: string;
  job: string;
}

export interface Identifiable {
  id: string;
}

export interface Database<T extends Identifiable> {
  set(newValue: T): void;
  get(id: string): T | undefined;
}

export interface ObserverDatabase<T extends Identifiable> {
  set(newValue: T): void;
  get(id: string): T | undefined;

  onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void;
  onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void;
}

export type Listener<EventType> = (e: EventType) => void;

export interface AfterSetEvent<T> {
  value: T;
}

export interface BeforeSetEvent<T> {
  value: T;
  newValue: T;
}
