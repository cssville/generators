import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class BorderStyleGenerator extends Generator {
  list = ["none", "hidden", "solid", "dotted", "dashed", "double", "groove", "ridge"]
  cssData = [
    new CssClassData("bor-sty", ["border-style"], this.list),
    new CssClassData("bor-bot-sty", ["border-bottom-style"], this.list),
    new CssClassData("bor-lef-sty", ["border-left-style"], this.list),
    new CssClassData("bor-rig-sty", ["border-right-style"], this.list),
    new CssClassData("bor-top-sty", ["border-top-style"], this.list),
  ]
}