class Game {

    sequences = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    turn = 'x'
    x = []
    o = []
    disabled = []
    status = null //win or tie

    onSelect(i){
        if(!this.checkIfDisabled(i)){
            this.disabled = [...this.disabled, i]
            if(this.turn === 'x'){
                this.x = [...this.x, i]
                this.turn = 'o'
            } else {
                this.o = [...this.o, i]
                this.turn = 'x'
            }
            this.setCompletion()
        }
    }

    checkIfDisabled(i){
        return this.disabled.includes(i)
    }

    setCompletion(){

        this.sequences.forEach(set => {
            if(set.every(value => this.x.includes(value))){
                this.status = 'X Wins'
            }
            if(set.every(value => this.o.includes(value))){
                this.status = 'O Wins'
            }
        })

        if(!this.status && this.disabled.length === 9){
            this.status = `It's a Tie`
        }
    }

    restart(){
        this.x = []
        this.o = []
        this.disabled = []
        this.status = null
        this.turn = 'x'
    }
}   

export default Game