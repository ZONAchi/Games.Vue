<script>
export default{
  // 變數資料
  data(){
    return {
      num:0,
      name:'Nero',
      id:'000000',
      age:35,
      array:['3','5','55'],
      inputType:'password',
      changeColor:'',
      showDiv:true,
    }
  },
  // 方法(funtion)
  methods: {
    plus(){
      // this=>只要跨不同功能，都須加this.
      this.num++
      console.log(this.num);
      console.log('有');
    },
    showhide(){
      if (this.inputType=='password') {
        this.inputType ='text';
      }else{
        this.inputType ='password';
      }
    },
    changeBG(){
      console.log('有點')
      if (this.changeColor == '') {
        this.changeColor = 'orange';
      }else{
        this.changeColor ='';
      }
    },
  },
}
</script>

<!-- <script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script> -->

<template>
  <main>
    <!-- 使用變數{{變數名稱}} -->
    {{ name }}
    {{ id }}
    {{ age }}
    <!-- 綁定監聽事件 -->
     <!-- v-on -->
    <button type="button" v-on:click="age++">{{ age }}</button>
    <!-- @簡寫 -->
    <button type="button" @click="plus">{{ num }}</button>
    <!-- v-bind 操控網頁元素(屬性的值) -->
     <!-- 使用方法1 -->
    <input type="text">
    <input v-bind:type="inputType" name="" id="">
    <button type="button" @click="showhide">顯示/隱藏</button>

    <div class="box" v-bind:class="changeColor" @click="changeBG"></div>

    <!-- 判斷式if/else-if/else須連著撰寫 中間不得有空格或其他東西 -->
    <div v-if="num == 1" class="box"></div>
    <div v-else-if="num == 2" class="box orange"></div>
    <div v-else class="box pink"></div>

    <!-- for與判斷式需分開寫 -->
    <!-- <div v-for="item in array">
      <div v-if="item == 3">{{ item }}</div>
    </div> -->

  </main>
</template>

<style scoped>
main{
  width: 100%;
  height: 100vh;
  padding: 100px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  color:rgb(157, 190, 153);
}
.box{
  width: 100px;
  height: 100px;
  background-color: rgb(144, 190, 144);
  
}
.orange{
  background-color: rgb(244, 166, 94);
}
.pink{
  background-color: rgb(229, 162, 155);
}
</style>
