<template>
    <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>
// import Chart from 'chart.js'; // package.json에 설치되어있는 라이브러리명과 동일

export default {
  // 컴포넌트 속성 && 인스턴스 옵션
  props: ['propsdata'],
  mounted() {
    // var ctx = document.getElementById('barChart');
    // var ctx = this.$refs.barChart;
    // ref속성은 각각의 컴포넌트에서만 접근할 수 있는 속성이기때문에 다른 컴포넌트와 충돌되지않음 컴포넌트기반 개발시에 유용함
    var myChart = new this.$_Chart(this.$refs.barChart, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: this.propsdata,
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            onClick: function() {
                this.$emit('refresh:chart');
            }
        }
    });
  }
}
</script>

<style>

</style>
