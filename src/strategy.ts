import { Identifiable, StrategyDatabase } from "./types";

export default function createStrategyDatabase<T extends Identifiable>() {
  class InMemoryDatabase implements StrategyDatabase<T> {
    private db: Record<string, T> = {};

    static instance: InMemoryDatabase = new InMemoryDatabase();

    private constructor() {}

    public set(newValue: T): void {
      this.db[newValue.id] = newValue;
    }
    public get(id: string): T | undefined {
      return this.db[id];
    }

    public select(scoreStrategy: (item: T) => number): T | undefined {
      const found: {
        max: number;
        item: T | undefined;
      } = {
        max: 0,
        item: undefined,
      };

      Object.values(this.db).reduce((f, item) => {
        const score = scoreStrategy(item);
        if (score > f.max) {
          f.max = score;
          f.item = item;
        }
        return f;
      }, found);

      return found.item;
    }
  }

  return InMemoryDatabase;
}
