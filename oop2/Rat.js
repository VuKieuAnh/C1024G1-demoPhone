class Rat {
    name; speed; weight; status;

    constructor(name, speed, weight) {
        this.name = name;
        this.speed = speed;
        this.weight = weight;
        // status: nen de 3 trang thai: 0: chet, 1: song, -1: bi bat
        this.status = 1;
    }

    sound(str){
        return `${name} ${str}`;
    }
}
