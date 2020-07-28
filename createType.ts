// 单例模式：一个类只有一个事例，并提供一个访问它都全局访问点

class SingletonOne {
  private constructor() {} // 构造器私有化，外部不可以new

  private static instance: SingletonOne = new SingletonOne();

  public static getInstance(): SingletonOne {
    return this.instance;
  }
}

console.log(SingletonOne.getInstance() === SingletonOne.getInstance())

class SingletonTwo {
  private constructor() {}

  private static instance: SingletonTwo = null!;

  public static getInstance(): SingletonTwo {
    if (this.instance === null) {
      this.instance = new SingletonTwo();
      return this.instance;
    } else return this.instance;
  }

}

console.log(SingletonTwo.getInstance() === SingletonTwo.getInstance());

// 简单工厂

// 工厂方法

// 抽象工厂

// 原型

// 建造者
