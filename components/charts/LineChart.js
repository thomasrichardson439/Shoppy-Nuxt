import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options', 'gradient'],
  mounted () {
    let localData = this.data

    if(this.gradient && this.gradient.length){
      let gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
      gradient.addColorStop(0, this.gradient[0])
      gradient.addColorStop(0.5, this.gradient[1]);
      gradient.addColorStop(1, this.gradient[2]);

      localData.datasets[0].backgroundColor = gradient
    }
    
    this.renderChart(localData, this.options)
  }
}