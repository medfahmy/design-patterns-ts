import { Identifiable, VisitorDatabase } from "./types";

export default function createVisitorDatabase<T extends Identifiable>() {
  class InMemoryDatabase implements VisitorDatabase<T> {
    private db: Record<string, T> = {};

    static instance: InMemoryDatabase = new InMemoryDatabase();

    private constructor() {}

    public set(newValue: T): void {
      this.db[newValue.id] = newValue;
    }
    public get(id: string): T | undefined {
      return this.db[id];
    }

    public visit(visitor: (item: T) => void): void {
      Object.values(this.db).forEach(visitor);
    }
  }

  return InMemoryDatabase;
}
