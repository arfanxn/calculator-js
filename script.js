const getDocQuerySelect = el => document.querySelector(el)
const getDocQuerySelectAll = el => document.querySelectorAll(el)

class Calculator {
    constructor() {
        this.prevOps = ''
        this.currOps = '0'
        this.operator = undefined
        this.prev = 0
        this.curr = 0
    }
    clear() {
        this.prevOps = ''
        this.currOps = '0'
        this.operator = undefined
    }
    delete() {
        // if (calcCurrOps.textContent == '0') return
        if (this.currOps.length == 1) return this.currOps = '0'
        this.currOps = this.currOps.slice(0, -1)
        console.log(this.curr);
    }
    appendNum(num) {
        if (num === '.' && this.currOps.includes('.')) return
        if (this.currOps == '0') this.currOps = ''
        return this.currOps += num
    }
    operation(op) {
        if (this.currOps == '0' && this.prevOps == '') {
            return
        } else if (this.currOps != '' && this.prevOps == '') { //adding ops
            this.prevOps = `${this.currOps} ${op}`
            this.currOps = '0'
        } else if (this.currOps == '0' && this.prevOps != '') { //switching ops
            this.prevOps = this.prevOps.slice(0, -1)
            return this.prevOps += op
        } else if (this.currOps != '0' && this.prevOps != '') { //results
            this.equal()
            this.prevOps = `${this.currOps} ${op}`
            this.currOps = '0'
        }
    }
    equal() { //results with equal 
        this.prev = parseFloat(this.prevOps.slice(0, -2))
        this.operator = this.prevOps[this.prevOps.length - 1]
        this.curr = parseFloat(this.currOps)
        switch (this.operator) {
            case '/':
                this.currOps = this.prev / this.curr
                this.currOps.toString()
                break;
            case '*':
                this.currOps = this.prev * this.curr
                this.currOps.toString()
                break;
            case '-':
                this.currOps = this.prev - this.curr
                this.currOps.toString()
                break;
            case '+':
                this.currOps = this.prev + this.curr
                this.currOps.toString()
                break;
        }
        this.prevOps = '';
    }
    print() {
        calcCurrOps.innerHTML = this.currOps
        calcPrevOps.innerHTML = this.prevOps
    }
}

const calculator = new Calculator()
const calcCurrOps = getDocQuerySelect('[data-curr-operand]')
const calcPrevOps = getDocQuerySelect('[data-prev-operand]')
const calcClearBtn = getDocQuerySelect('[data-clear]')
const calcDelBtn = getDocQuerySelect('[data-delete]')
const calcEqualBtn = getDocQuerySelect('[data-equal]')
const calcNumBtn = getDocQuerySelectAll('[data-number]')
const calcOpsBtn = getDocQuerySelectAll('[data-operation]')
document.addEventListener("DOMContentLoaded", () => {
    calculator.clear()
    calculator.print()
});

calcClearBtn.addEventListener('click', btn => {
    calculator.clear()
    calculator.print()
})
calcDelBtn.addEventListener('click', btn => {
    calculator.delete()
    calculator.print()
})
calcEqualBtn.addEventListener('click', btn => {
    calculator.equal()
    calculator.print()
})
calcNumBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNum(btn.textContent)
        calculator.print()
    })
})
calcOpsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.operation(btn.textContent)
        calculator.print()
    })
})

console.log(calculator.equal)

document.getElementById("btnbtn").addEventListener('click', () => {
    alert('hello world');
})