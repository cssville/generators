import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class FontWeightGenerator extends Generator {
  cssData = [
    new CssClassData("fon-wei", ["font-weight"],
      ["normal", "bold", "lighter", "bolder", "100", "200", "300", "400", "500",
        "600", "700", "800", "900", "inherit", "initial", "revert", "unset"])
  ]
}