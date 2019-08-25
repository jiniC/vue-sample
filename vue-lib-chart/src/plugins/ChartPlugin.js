import Chart from 'chart.js';

export default {
    install(Vue) {
        // console.log('chart plugin loaded');
        Vue.prototype.$_Chart = Chart;
        // BarChart.vue, LineChart.vue 파일에서 this.$_Chart 접근 가능해짐
    }
}

// https://vue-chartjs.org/
// https://www.chartjs.org/
// https://www.chartjs.org/docs/latest/


/*
1. 차트 라이브러리 NPM으로 설치
2. 설치된 라이브러리를 import로 App.vue에 로딩
3. mounted() 라이프 사이클 훅에서 차트를 그림 (ref속성)
4. 차트를 컴포넌트화하는 작업
5. 컴포넌트의 플러그인화 (라이브러리를 컴포넌트마다 불러오는 번거로움 없애줌) https://vuejs.org/v2/guide/plugins.html#ad
6. 컴포넌트 통신을 이용한 차트 컴포넌트 기능 결합 (props속성과 event발생)
*/