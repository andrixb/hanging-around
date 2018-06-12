export default class GeneratorLab {
    constructor() {
        this.gen = this.generator(10);
        this.init();
    }

    init() {
        console.log(this.gen.next().value); // 10
        console.log(this.gen.next().value); // 11
        console.log(this.gen.next().value); // 12
        console.log(this.gen.next().value); // 13
        console.log(this.gen.next().value); // 20
    }

    * generator(i) {
        yield i;
        yield* this.anotherGenerator(i);
        yield i + 10;
    }
    
    * anotherGenerator(i) {
        yield i + 1;
        yield i + 2;
        yield i + 3;
    }

}
