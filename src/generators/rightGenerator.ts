import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class RightGenerator extends Generator {
  cssData = [
    new CssClassData("rig", ["right"],
      ["0", "auto", "inherit", "initial"]),
  ]
}