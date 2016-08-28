import * as React from "react"
import * as ReactDOM from "react-dom"
import Main from "./main"

const el = document.getElementById("main")

window.addEventListener("load", () => ReactDOM.render(<Main />, el))
