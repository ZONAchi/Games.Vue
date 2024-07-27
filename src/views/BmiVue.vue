<script>
export default{
    data() {
      return {
        myHeight:'',
        myWeight:'',
        myResult:'',
      }
    },
    methods: {
        calculateBtn(){
            this.myResult = ('MBI=', parseFloat(this.myWeight) / (parseFloat(this.myHeight) / 100 * parseFloat(this.myHeight) / 100));
            this.myResult =this.myResult.toFixed(2);
            if (this.myWeight.length == 0 || this.myHeight.length == 0) {
                alert('請輸入身高體重');
            }
        },
        clearBtn(){
            this.myHeight = '';
            this.myWeight = '';
            this.myResult ='';
        },
    },
}
</script>

<template>
    <main class="flex flex-col items-center gap-3 p-4">
        <form class="w-[300px] h-[320px] bg-amber-50 rounded-3xl flex flex-col gap-4 p-4 text-center items-center">
            <span class="text-2xl font-bold">BMI計算機</span>
            <label for="" class="w-full">
                <span>身高</span>
                <input class="w-[200px] ml-3" type="number" placeholder="請輸入身高(公分)" v-model="myHeight">
            </label>
            <label for="" class="w-full">
                <span>體重</span>
                <input class="w-[200px] ml-3" type="number" placeholder="請輸入體重(公斤)" v-model="myWeight">
            </label>
            <button class="w-[250px] h-[30px] bg-amber-300 rounded-3xl" @click="calculateBtn" type="button">計算BMI</button>
            <button class="w-[250px] h-[30px] bg-stone-300 rounded-3xl " @click="clearBtn" type="button">清空</button>
            <div class="flex flex-row text-center mt-5 font-bold text-2xl">
                <span>你的BMI值：</span>
                <span>{{ myResult }}</span>
            </div>
        </form>
        <div class="flex">
            <div class="w-[100%] bg-white p-3 text-m font-bold border-2 yellow" v-if="0 < myResult && myResult < 18.5">
                <p class="h-[50px] text-center border-b-2 ">BMI &lt; 18.5</p>
                <p>「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康</p>
            </div>
            <div class="w-[100%] bg-white p-3 text-m font-bold border-2" v-else>
                <p class="h-[50px] text-center border-b-2">BMI &lt; 18.5</p>
                <p>「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康</p>
            </div>
            <div class="w-[100%] bg-white p-3 text-m font-bold border-2 green" v-if="18.5 <= myResult && myResult < 24">
                <p class="h-[50px] text-center border-b-2"> 18.5 ≤ BMI &lt; 24</p>
                <p> 恭喜！「健康體重」，要繼續保持！</p>
            </div>
            <div class="w-[100%] bg-white p-3 text-m font-bold border-2" v-else>
                <p class="h-[50px] text-center border-b-2"> 18.5 ≤ BMI &lt; 24</p>
                <p> 恭喜！「健康體重」，要繼續保持！</p>
            </div>
            <div class="w-[100%] bg-white p-3 text-m font-bold border-2 orange" v-if="24 <= myResult && myResult < 27">
                <p class="h-[50px] text-center border-b-2"> 24 ≤ BMI &lt; 27</p>
                <p> 「體重過重」了，要小心囉，趕快力行「健康體重管理」！</p>
            </div>
            <div class="w-[100%] bg-white p-3 text-m font-bold border-2" v-else>
                <p class="h-[50px] text-center border-b-2"> 24 ≤ BMI &lt; 27</p>
                <p> 「體重過重」了，要小心囉，趕快力行「健康體重管理」！</p>
            </div>
            <div class="w-[100%] bg-white p-3 text-m font-bold border-2 pink" v-if="myResult >= 27">
                <p class="h-[50px] text-center border-b-2">BMI ≥ 27 </p>
                <p> 啊～「肥胖」，需要立刻力行「健康體重管理」囉！</p>
            </div>
            <div class="w-[100%] bg-white p-3 text-m font-bold border-2" v-else>
                <p class="h-[50px] text-center border-b-2">BMI ≥ 27 </p>
                <p> 啊～「肥胖」，需要立刻力行「健康體重管理」囉！</p>
            </div>
        </div>
    </main>
</template>

<style>
    .yellow{
        background-color: rgb(248, 233, 166);
    }
    .pink{
        background-color: rgb(231, 174, 161);
    }
    .green{
        background-color: rgb(194, 220, 177);
        color:black;
    }
    .orange{
        background-color: rgb(238, 192, 150);
    }
</style>