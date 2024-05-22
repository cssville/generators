import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"
import CssvilleShadow from "../vars/shadow"
import ThemeColors from "../vars/themeColors"

export class BoxShadowGenerator extends Generator {
  cssData = [
    new CssClassData("box-sha", ["box-shadow"],
      ["none"],
      new Map([
        ["xs", [`${CssvilleShadow.xs.var} ${ThemeColors.shadow.var}`]],
        ["sm", [`${CssvilleShadow.sm.var} ${ThemeColors.shadow.var}`]],
        ["md", [`${CssvilleShadow.md.var} ${ThemeColors.shadow.var}`]],
        ["lg", [`${CssvilleShadow.lg.var} ${ThemeColors.shadow.var}`]],
        ["xl", [`${CssvilleShadow.xl.var} ${ThemeColors.shadow.var}`]],
      ])
    ),
  ]
}