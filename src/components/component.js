const components = {}
export default class Component {
  constructor (page, component_id, config = {}) {
    this.name         = config.name
    this.props        = config.props || {}
    this.callbacks    = config.on    || {}
    this.page         = page
    this.component_id = component_id
  }

  static include (component) {
    components[component.name] = component
  }

  static init (page, component_id, config) {
    let instance = new components[config.name](page, component_id, config)
    instance.setup()
    return instance
  }

  setup () {
    let state = this.initState(this.props)
    let props = this.initProps(this.props)
    let on    = this.initCallback()
    this.data = {
      name: this.name,
      _data: {
        state,
        props,
        on
      }
    }
    this.initOther()
    this.page.setData({[this.component_id]: this.data})
  }

  // 其他的初始化，在对应的子类实现。
  // 如初始化嵌套组件
  initOther () {
  }

  initState (props) {
    return props.state
  }

  initProps (props) {
    return props
  }

  initCallback () {
    let res = {}
    for (let callback_name in components[this.name].on) {
      let wxml_func_name = `${this.name}_${this.component_id}_${callback_name}_${~~(Math.random() * 100000000)}`.replace(/-/g, '')
      this.page[wxml_func_name] = components[this.name].on[callback_name].bind(this)
      res[callback_name] = wxml_func_name
    }
    return res
  }

  updateState (new_state) {
    this.data._data.state = Object.assign({}, this.data._data.state, new_state)
    this.page.setData({[this.component_id]: this.data})
  }

  getState () {
    return this.data.state
  }
}
