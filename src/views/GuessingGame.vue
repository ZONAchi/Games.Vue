<script>
import rival from '@/assets/rival.jpg'
import paper from '@/assets/paper.jpg'
import scissors from '@/assets/scissors.jpg'
import stone from '@/assets/stone.jpg'

export default{
    data() {
      return {
        myChoose:'',
        comChoose:'',
        resultShow:'',
        rival:rival,
        paper:paper,
        scissors:scissors,
        stone:stone,
        point:[
            {win:0,lose:0,tie:0},
        ]
      }
    },
    methods: {
        playPaper(){
            let img = document.querySelector('#pic>img');
            this.myChoose = 1;
            this.comChoose = (Math.floor(Math.random() * 3 + 1));
            console.log(this.myChoose,this.comChoose);
            if(this.comChoose == 1){
                img.src = this.paper;
                this.resultShow = '平手';
            }else if (this.comChoose == 2){
                img.src = this.scissors;
                this.resultShow = '你輸了';
            }else{
                img.src = this.stone;
                this.resultShow = '你贏了!!';
            }
            this.pointnum();
        },
        playscissors(){
            let img = document.querySelector('#pic>img');
            this.myChoose = 2;
            this.comChoose = (Math.floor(Math.random() * 3 + 1));
            console.log(this.myChoose,this.comChoose);
            if(this.comChoose == 1){
                img.src = this.paper;
                this.resultShow =  '你贏了!!';
            }else if (this.comChoose == 2){
                img.src = this.scissors;
                this.resultShow = '平手';
            }else{
                img.src = this.stone;
                this.resultShow = '你輸了';
            }
            this.pointnum();
        },
        playstone(){
            let img = document.querySelector('#pic>img');
            this.myChoose = 3;
            this.comChoose = (Math.floor(Math.random() * 3 + 1));
            console.log(this.myChoose,this.comChoose);
            if(this.comChoose == 1){
                img.src = this.paper;
                this.resultShow =  '你輸了';
            }else if (this.comChoose == 2){
                img.src = this.scissors;
                this.resultShow = '你贏了!!';
            }else{
                img.src = this.stone;
                this.resultShow = '平手';
            }
            this.pointnum();
        },
        pointnum(){
            this.point.forEach((item) => {
                if(this.resultShow === '平手'){
                    item.tie++;
                }else if (this.resultShow === '你贏了!!'){
                    item.win++;
                }else{
                    item.lose++;
                }
            });
        }
    },
}
</script>

<template>
    <div class="flex flex-col items-center p-5 text-xl">
        <div class="flex flex-col items-center mb-5">
            <span class="font-bold text-3xl">猜拳遊戲</span>
            <span class="font-bold">請選擇剪刀or石頭or布</span>
        </div>
        <div class="flex flex-col items-center w-[500px] h-[200px] p-3 gap-3 border-4 rounded-3xl border-yellow-400 bg-white">
            <span class="font-bold">自己</span>
            <div class="flex flex-row gap-3">
                <button class="w-[100px] h-[100px] bg-cover my_paper opacity-50 hover:opacity-100" @click="playPaper"></button>
                <button class="w-[100px] h-[100px] bg-cover my_scissors opacity-50 hover:opacity-100" @click="playscissors" ></button>
                <button class="w-[100px] h-[100px] bg-cover my_stone opacity-50 hover:opacity-100" @click="playstone"></button>
            </div>
        </div>
        <div class="w-[200px] h-[50px] text-2xl font-bold text-center text-orange-600 p-3">{{ resultShow }}</div>
        <div class="p-3" v-for="(item,index) in point" :key="index">贏: {{ item.win }} 輸: {{ item.lose }} 平手: {{ item.tie }}</div>  
        <div class="flex flex-col items-center w-[500px] h-[200px] p-3 gap-3 border-4 rounded-3xl border-green-700 bg-white">
            <span class="font-bold">對手</span>
            <picture id="pic">
                <img :src="rival" class="w-[100px] h-[100px]" alt="">
            </picture>
        </div>
    </div>
</template>

<style>
        .my_paper {
            background-image: url(../assets/paper.jpg);
        }

        .my_scissors {
            background-image: url(../assets/scissors.jpg);
        }

        .my_stone {
            background-image: url(../assets/stone.jpg);
        }
</style>