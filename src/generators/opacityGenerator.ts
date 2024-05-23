import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class OpacityGenerator extends Generator {
  cssData = [
    new CssClassData("opa", ["opacity"],
      ["inherit", "initial", "revert", "revert-layer", "unset"],
      new Map([
        ["0", ["0"]],
        ["01", ["0.1"]],
        ["02", ["0.2"]],
        ["03", ["0.3"]],
        ["04", ["0.4"]],
        ["05", ["0.5"]],
        ["06", ["0.6"]],
        ["07", ["0.7"]],
        ["08", ["0.8"]],
        ["09", ["0.9"]],
        ["1", ["1"]],
      ])
    ),
  ]
}