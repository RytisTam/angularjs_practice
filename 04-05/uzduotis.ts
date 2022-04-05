class Darbuotojas{
    constructor(
        protected _vardas:string,
        protected _pavarde:string,
        protected _atlyginimas:number,
    ){}

    get vardas(){
        return this._vardas;
    }

    get pavarde(){
        return this._pavarde;
    }

    get atlyginimas(){
        return this._atlyginimas;
    }

    set atlyginimas(atlyginimas){
        this._atlyginimas = atlyginimas;
    }

    public gpm(){
        return this._atlyginimas * 20 / 100;
    }

    public psd(){
        return this._atlyginimas * 6.98 / 100;
    }

    public vsd(){
        return this._atlyginimas * 12.52 / 100;
    }

    
}

class PirmaeilisDarbuotojas extends Darbuotojas{
    constructor(
        _vardas:string,
        _pavarde:string,
        _atlyginimas:number,
        private _npd:number = 0,
    ){
        super(_vardas, _pavarde, _atlyginimas);
        this.perskaiciuotiNPD();
    }

    override set atlyginimas(atlyginimas:number){
        this._atlyginimas = atlyginimas;
        this.perskaiciuotiNPD();
    }

    get npd(){
        return this._npd;
    }
    
    
    private perskaiciuotiNPD(){        
        if (this.atlyginimas < 730) {
            console.log('yes');
            return this._npd = 460;
        } else if (this.atlyginimas > 730 && this.atlyginimas < 1678) {
            return this._npd = 460 - 0.26 * (this._atlyginimas - 730);
        } else {
            return this._npd = 460 - 0.18 * (this._atlyginimas - 642);
        }
    }

    public override gpm(){
        return this._atlyginimas = (this._atlyginimas - this._npd)*0.20;
    }

}

const pd1 = new PirmaeilisDarbuotojas('Jonas', 'Petrauskas',2500);
console.log(pd1.atlyginimas);
console.log(pd1.npd);


class PraktikantasDarbuotojas extends Darbuotojas{
    constructor(
        _vardas:string,
        _pavarde:string,
    ){
        super(_vardas, _pavarde, 0)
    }

    override get atlyginimas(): number {
        return 0;
    }
    set atlyginimas(atlyginimas: number) {
        this._atlyginimas = 0;
    }

    public override gpm(){
        return 0;
    }

    public override psd(){
        return 0;
    }

    public override vsd(){
        return 0;
    }
    
    
}

const pd2 = new PraktikantasDarbuotojas('Praktikantas', 'Nevisaidarbuotojas');
console.log(pd2.gpm(),pd2.psd(), pd2.vsd());