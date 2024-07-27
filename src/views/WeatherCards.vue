

<script>

export default{
    data() {
      return {
        apiCity:[],
        allArea : ['臺北市', '新北市', '嘉義縣', '嘉義市', '新竹縣', '新竹市', '臺南市', '宜蘭縣', '苗栗縣', '雲林縣', '花蓮縣', '臺中市', '臺東縣', '桃園市', '南投縣', '高雄市', '金門縣', '屏東縣', '基隆市', '澎湖縣', '彰化縣', '連江縣',],
        northArea : ['新北市', '新竹縣', '新竹市', '臺北市', '桃園市', '基隆市', '苗栗縣',],
        midArea : ['雲林縣', '臺中市', '南投縣', '彰化縣', '嘉義縣', '嘉義市',],
        southArea : ['臺南市', '高雄市', '屏東縣',],
        eastArea : ['宜蘭縣', '花蓮縣', '臺東縣',],
        outsideArea : ['金門縣', '澎湖縣', '連江縣',],
    }
    },
    mounted(){
        this.callFetch();
        this.btnAction();
    },
    methods: {
        callFetch() {
            fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-88085FAF-7CB2-4FA3-9F3C-56D21069A1EA')
                .then(function (response) {
                    return response.json();
                })
                .then(function (item) {
                    let all_city = item.records.location;
                    console.log('所有縣市天氣資料',all_city);
                    let citys_name = all_city.filter((all_citys) => all_city.includes=(all_citys.locationName));
                    console.log('過濾後縣市天氣資料',citys_name);
                    // btn_action(all_city);
                    // cards_show(citys_name);
                })
        },

        btnAction(){
            console.log();
        },


        // areaChange(item){
        //     if(item === 'all_area'){
        //         console.log(this.mounted);
        //     }
        // },
    },
}
</script>

<template>
<main class="flex flex-row">
   <aside class="w-[200px] h-[600px] p-5"> 
        <ul class="flex flex-col gap-4 text-lg text-center">
            <li @click="areaChange('all_area')" class="p-1 rounded-3xl bg-indigo-300 hover:bg-indigo-400 text-white shadow-md">
                <a class="font-black" aria-current="page" href="#">全部縣市</a>
            </li>
            <li @click="areaChange('north_area')" class="p-1 rounded-3xl bg-indigo-300 hover:bg-indigo-400 text-white shadow-md">
                <a class="font-black" href="#">北部</a>
            </li>
            <li @click="areaChange('mid_area')" class="p-1 rounded-3xl bg-indigo-300 hover:bg-indigo-400 text-white shadow-md">
                <a class="font-black" href="#">中部</a>
            </li>
            <li @click="areaChange('south_area')" class="p-1 rounded-3xl bg-indigo-300 hover:bg-indigo-400 text-white shadow-md">
                <a class="font-black" href="#">南部</a>
            </li>
            <li @click="areaChange('east_area')" class="p-1 rounded-3xl bg-indigo-300 hover:bg-indigo-400 text-white shadow-md">
                <a class="font-black" href="#">東部</a>
            </li>
            <li @click="areaChange('outside_area')" class="p-1 rounded-3xl bg-indigo-300 hover:bg-indigo-400 text-white shadow-md">
                <a class="font-black" href="#">外島</a>
            </li>
        </ul>
    </aside>
        <section class="w-[calc(100vw_-_200px)] flex flex-wrap justify-content-center grid grid-cols-2 lg:grid-cols-4 g-3 p-5">
            <div class="h-[350px] flex flex-col items-center text-center p-5 gap-3 rounded-3xl bg-white">
                <img src="../assets/cloud-wind.png" class="w-[100px] h-[100px] m-5" alt="...">
                <p class="text-3xl font-bold">縣市</p>
                <div class='flex gap-10 text-center'>
                    <div class='flex flex-col'>
                        <p >最低溫</p>
                        <p class="text-2xl font-bold text-orange-600">°C</p>
                    </div>
                    <div class='flex flex-col'>
                        <p >最高溫</p>
                        <p class="text-2xl font-bold text-orange-600">°C</p>
                    </div>
                </div>
                <p class="text-xl font-bold">WX</p>
            </div>
        </section>
    </main>
</template>

<style>
</style>