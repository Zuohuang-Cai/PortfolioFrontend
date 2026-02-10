export interface DesignItem {
  name: string;
  description: string;
  icon: string;
  code?: string;
  principle?: string;
  pros?: string[];
  cons?: string[];
  layers?: string[];
}

export interface DesignCategory {
  category: string;
  color: string;
  items: DesignItem[];
}

export const designKnowledge: DesignCategory[] = [
  {
    category: "Design Patterns",
    color: "#FF008C",
    items: [
      {
        name: "Factory Pattern",
        description:
          "Creates objects through a common interface, letting subclasses decide which class to instantiate. Decouples object creation from usage.",
        icon: "🏭",
        code: `interface Product { }
class ConcreteProductA implements Product { }
class Factory {
  create(type): Product {
    return new ConcreteProductA();
  }
}`
      },
      {
        name: "Singleton Pattern",
        description: "Ensures a class has only one instance and provides a global access point to it.",
        icon: "1️⃣",
        code: `class Singleton {
  private static instance: Singleton;
  static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}`
      },
      {
        name: "Observer Pattern",
        description:
          "Defines a one-to-many dependency between objects. When one object changes state, all dependents are notified.",
        icon: "👁️",
        code: `interface Observer {
  update(data: any): void;
}
class Subject {
  observers: Observer[] = [];
  notify(data) {
    this.observers.forEach(o => o.update(data));
  }
}`
      },
      {
        name: "Strategy Pattern",
        description:
          "Defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.",
        icon: "♟️",
        code: `interface Strategy {
  execute(data: any): any;
}
class Context {
  constructor(private strategy: Strategy) {}
  doAction(data) {
    return this.strategy.execute(data);
  }
}`
      }
    ]
  },
  {
    category: "SOLID Principles",
    color: "#9C1AFF",
    items: [
      {
        name: "Single Responsibility",
        description: "A class should have only one reason to change. Each class does one thing well.",
        icon: "🎯",
        principle: "S",
        code: `// ❌ Bad: Multiple responsibilities
class User {
  saveToDatabase() { }
  sendEmail() { }
  generateReport() { }
}

// ✅ Good: Single responsibility
class User { }
class UserRepository { save(user) { } }
class EmailService { send(user) { } }`
      },
      {
        name: "Open/Closed",
        description: "Software entities should be open for extension but closed for modification.",
        icon: "🔓",
        principle: "O",
        code: `// ✅ Open for extension, closed for modification
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  area() { return this.width * this.height; }
}

class Circle implements Shape {
  area() { return Math.PI * this.radius ** 2; }
}

// Add new shapes without modifying existing code`
      },
      {
        name: "Liskov Substitution",
        description: "Subtypes must be substitutable for their base types without altering correctness.",
        icon: "🔄",
        principle: "L",
        code: `// ❌ Bad: Square breaks Rectangle behavior
class Rectangle {
  setWidth(w) { this.width = w; }
  setHeight(h) { this.height = h; }
}

class Square extends Rectangle {
  setWidth(w) { this.width = this.height = w; }
}

// ✅ Good: Use composition or separate abstractions`
      },
      {
        name: "Interface Segregation",
        description: "Clients should not be forced to depend on interfaces they don't use.",
        icon: "✂️",
        principle: "I",
        code: `// ❌ Bad: Fat interface
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

// ✅ Good: Segregated interfaces
interface Workable { work(): void; }
interface Eatable { eat(): void; }
interface Sleepable { sleep(): void; }

class Robot implements Workable { }`
      },
      {
        name: "Dependency Inversion",
        description: "High-level modules should not depend on low-level modules. Both should depend on abstractions.",
        icon: "⬆️",
        principle: "D",
        code: `// ❌ Bad: Direct dependency
class UserService {
  db = new MySQLDatabase();
}

// ✅ Good: Depend on abstraction
interface Database { query(sql: string): any; }

class UserService {
  constructor(private db: Database) {}
}`
      }
    ]
  },
  {
    category: "Architecture",
    color: "#4400FF",
    items: [
      {
        name: "Monolithic",
        description:
          "All functionality in a single codebase. Simple to deploy but limited scalability.",
        icon: "🏢",
        pros: ["Simple deployment", "Easy debugging", "Low latency"],
        cons: ["Hard to scale", "Fixed tech stack", "High deployment risk"]
      },
      {
        name: "Modular Monolith",
        description:
          "Modules separated by business domain within a monolith. Prepares for microservices migration.",
        icon: "📦",
        pros: ["Clear module boundaries", "Easy refactoring", "Gradual migration"],
        cons: ["Requires strict discipline", "Shared database"]
      },
      {
        name: "Microservices",
        description:
          "Independently deployable small services communicating via APIs.",
        icon: "🔗",
        pros: ["Independent scaling", "Tech diversity", "Fault isolation"],
        cons: ["High complexity", "Ops overhead", "Distributed issues"]
      },
      {
        name: "Clean Architecture",
        description:
          "Business logic at the core, outer layers depend on inner layers. Keeps core independent.",
        icon: "🧅",
        layers: ["Entities", "Use Cases", "Controllers", "Frameworks"]
      }
    ]
  }
];

