class Donuts {
    constructor(count, autoclick, multiplier) {
        this._count = count;
        this._autoclick = autoclick;
        this._multiplier = multiplier;
        this._autoclickCost = 100;
        this._multiplierCost = 10;
        this._clickValue = 1
    }

    get count() {
        this._count;
    }
    get autoclick() {
        this._autoclick;
    }
    get multiplier() {
        this._multiplier;
    }
    get autoclickCost() {
        this._autoclickCost;
    }
    get multiplierCost() {
        this._multiplierCost;
    }
    get clickValue() {
        this._clickValue;
    }

    click() {
        this._count += this._clickValue;
    }
    autoclickClick() {
        if (this._count >= this._autoclickCost) {
            this._count -= this._autoclickCost;
            this._autoclickCost *= 1.1;
            this._autoclick++;
        }
        else {
            alert("You cannot afford an autoclicker yet!")
        }
        //TODO add functionality to the autoclick
    }
    multiplierClick() {
        if (this._count >= this._multiplierCost) {
            this._count -= this._multiplierCost;
            this._multiplierCost *= 1.1;
            this._multiplier++;
            this._clickValue *= 1.2;
        }
        else {
            alert("You cannot afford a multiplier yet!")
        }
    }
}




export default Donuts;