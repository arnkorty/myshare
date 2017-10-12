import Component from '../component'

export default class Demo extends Component {
}

Demo.on = {
  tap: function(evt) {
    this.page.log(this)
    this.page.log(this.page)
  }
}
