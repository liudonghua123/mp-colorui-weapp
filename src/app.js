import Taro from "@tarojs/taro";
import React, { Component } from "react"
import "mp-colorui/dist/style/index.scss";
import "./app.scss";

class App extends Component {

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return this.props.children
  }
}

export default App
