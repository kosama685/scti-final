import { Bar } from 'vue-chartjs'

export default {
	extends: Bar,
	props: ['chartData', 'options'],
	data() {
		return {
		};
	},
	mounted() {
		this.renderChart(this.chartData, this.options);
	},
    watch: {
	    "chartData.datasets.0.data": function(){
    		this.renderChart(this.chartData, this.options);
        }
    }
}
