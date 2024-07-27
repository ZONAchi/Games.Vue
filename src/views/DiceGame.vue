<script>

export default{
    data() {
      return {
        runNum:[],
      }
    },
    methods: {
        play_game(){
            while (this.runNum.length) {
                    this.runNum.pop();
                }
            for (let n = 0; n < 20; n++) {
                
                let dicenum_1 = this.randomnum();
                let dicenum_2 = this.randomnum();
                let dicenum_3 = this.randomnum();

                let diceresult = dicenum_1 + ' , ' + dicenum_2 + ' , ' + dicenum_3;
                this.runNum.push(diceresult);
                
                if (dicenum_1 == dicenum_2 && dicenum_2 == dicenum_3) {
                    this.runNum.push('恭喜!!骰子數字相同!!');
                    break;  
                }
            }
        },
        randomnum(){
            return Math.floor(Math.random() * 6 + 1);
        },
    },
}
</script>

<template>
    <div class="flex flex-col items-center gap-3 p-5 font-bold text-2xl">
        <button class="w-[150px] h-[40px] rounded-3xl bg-amber-300 shadow-lg mb-3 text-lg font-bold" @click="play_game">擲骰子</button>
        <section>
            <div class="flex text-center justify-center gap-2 mb-1 leading-6">
                <div class="w-8 h-6 bg-amber-500">1</div>
                <div class="w-8 h-6 bg-amber-500">2</div>
                <div class="w-8 h-6 bg-amber-500">3</div>
            </div>
            <div class="w-[400px] text-center tracking-widest font-bold" v-for="(item , index) in runNum" :key="index"> {{ item }}</div>
        </section>
    </div>
</template>

<style>
</style>