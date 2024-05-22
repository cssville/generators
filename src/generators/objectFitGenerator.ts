import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class ObjectFitGenerator extends Generator {
  cssData = [
    new CssClassData("obj-fit", ["object-fit"],
      ["contain", "cover", "fill", "none", "scale-down", "inherit", "initial", "revert", "revert-layer", "unset"]
    ),
  ]
}