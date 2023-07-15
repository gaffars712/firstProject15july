import loder from "./loder.gif"
import React from "react"

export default class Spinner extends React.Component {
  render() {
    return (
      <div className="w-100 mb-3  text-center">
        <img style={{width:"5rem" }} src={loder} />
        <p style={{fontSize:"10px"}}> Lodding...</p>
      </div>
    )
  }
}
