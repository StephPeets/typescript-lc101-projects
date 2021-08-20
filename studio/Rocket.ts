import { Payload } from "./Payload"
import { Cargo } from "./Cargo"
import { Astronaut } from "./Astronaut"

export class Rocket {
    totalCapacityKg: number;
    name: string;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let massSum: number = 0;
        for (let i: number = 0; i < items.length; i++) {
            massSum += items[i].massKg;
        }
        return massSum;
    }

    currentMassKg() {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        let addMass: number = 0;
        addMass = this.currentMassKg() + item.massKg;
        let confirmMass: boolean = (addMass <= this.totalCapacityKg);
        return confirmMass;
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }

}