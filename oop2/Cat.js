class Cat {
    name; weight; speed;

    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }

    catch(rat){
        if (this.speed>rat.speed){
            rat.status = -1;
            return rat.sound(`chuot ${rat.name} bi meo ${this.name} bat roi`);
        }
        else {
            return rat.sound(`chuot ${rat.name} khong meo ${this.name} bat`);
        }
    }

    eat(rat){
        if (rat.status == -1){
            this.weight+= rat.weight;
            rat.status = 0;
        }
        else {
            return rat.sound(`meo ${this.name} khong dc an chuot ${rat.name} `);
        }

    }
}
