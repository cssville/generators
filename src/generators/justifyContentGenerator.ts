import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class JustifyContentGenerator extends Generator {
  cssData = [
    new CssClassData("jus-con", ["justify-content"],
      ["center", "start", "flex-start", "end", "flex-end", "normal", "space-between", "space-around", "space-evenly",
        "stretch", "inherit", "initial", "revert", "unset"],
      new Map([
        ["safe-center", ["safe center"]],
        ["unsafe-center", ["unsafe center"]],
      ])
    )
  ]
}