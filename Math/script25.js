//Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).

function currencyMath(a, b, funcName) {
    let aModified = +a.slice(1);
    let bModified = +b.slice(1);

    function add() {
        return aModified + bModified;
    };
    function substr() {
        if (bModified > aModified) {
            return bModified - aModified;
        }
        return aModified - bModified;
    };
    function multpl() {
        return aModified * bModified;
    };
    function div() {
        if (bModified > aModified) {
            return bModified / aModified;
        }
        return aModified / bModified;
    };

    switch (funcName) {
        case ('add'):
            return add();
            break;
        case ('substr'):
            return substr();
            break;
        case ('multp'):
            return multpl();
            break;
        case ('div'):
            return div();
            break;
    };
}