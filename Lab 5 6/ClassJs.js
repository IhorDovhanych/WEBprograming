/*7. Об’єкт “АЗС” (Код, адреса, фірма-власник, запаси бензину вказаних марок,
наприклад А-98, А-92, А-95 (у літрах) та ціни одного літру пального кожної марки).
Запит вказаної марки бензину,  на АЗС фірми Х.*/

class AZS{
    constructor(id,adress,owner,gasolinesValueByName = {}, costs = []){
        this.id =  id
        this.adress = adress
        this.owner = owner
        this.gasolinesValueByName = gasolinesValueByName
        this.costs = costs
    }
    addGasolines(type,volume,cost){
        this.gasolinesValueByName[type] = volume
        this.costs.push(cost)
    }
    getGasolinesStr(){
        const keys = Object.keys(this.gasolinesValueByName)
        let result = ""
        for(let i=0; i < keys.length-1; i++){

            result += keys[i] + "," + this.gasolinesValueByName[keys[i]] + " "
        }
        result += keys[keys.length-1] + "," + this.gasolinesValueByName[keys[keys.length-1]]
        return result
    }
    toString(){
        return `
        id: ${this.id};
        addres: ${this.adress};
        owner: ${this.owner};
        gasoline: ${Object.keys(this.gasolinesValueByName).toString()}; volume: ${Object.values(this.gasolinesValueByName)}
        costs: ${this.costs};
        `
    }
}

class FindAZSByGasoline{
    constructor(items = []){
        this.items = items
    }

    FindAZSByGasoline(gasolineName){
        for(let i = 0; i < this.items.length; i++){
            for(let j = 0; j < Object.keys(this.items[i].gasolinesValueByName).length; j++){
                if(this.items[i].gasolinesValueByName[String(gasolineName)] != undefined){
                    console.log(this.items[i].toString())
                }
            }
        }
    }
}

let AZS1 = new AZS(1,1,"lol",
    {"A-95": 400, "A-92": 500 },
    [30, 20]
)
let AZS2 = new AZS(1,1,"lol",
    {"A-98": 300, "A-92": 500 },
    [30, 20]
)
let FindAZS = new FindAZSByGasoline([AZS1, AZS2])

FindAZS.FindAZSByGasoline("A-98")