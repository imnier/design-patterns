/* 单例模式：一个类只有一个事例，并提供一个访问它都全局访问点 */

class SingletonOne {
  private constructor() {} // 构造器私有化，外部不可以new

  private static instance: SingletonOne = new SingletonOne();

  public static getInstance(): SingletonOne {
    return this.instance;
  }
}

console.log(SingletonOne.getInstance() === SingletonOne.getInstance());

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

/* 简单工厂模式： 定义一个创建对象的类，用这个类封装实例化对象的行为 */

// 抽象工厂类: 包含具体工厂公共的属性和方法

interface Product {}

// 具体工厂类：包含每个工厂特有的属性和方法 及公共的属性和方法
class ProductOne implements Product {
  constructor() {}
}

class ProductTwo implements Product {
  constructor() {}
}

// 简单工厂
class SimpleFactory {
  public static createProduct(type: number) {
    let product = null;
    if (type === 1) {
      product = new ProductOne();
    } else if (type === 2) {
      product = new ProductTwo();
    }
    return product;
  }
}

/* 工厂方法模式 */

/* 抽象工厂模式 */

/* 原型 */

/* 建造者 */
