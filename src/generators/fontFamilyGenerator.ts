import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"
import CssvilleFontFamily from "../vars/fontFamily"

export class FontFamilyGenerator extends Generator {
  cssData = [
    new CssClassData("fon-fam", ["font-family"],
      [],
      new Map([
        ["primary", [`${CssvilleFontFamily.primary.var}`]],
        ["secondary", [`${CssvilleFontFamily.secondary.var}`]],
        ["code", [`${CssvilleFontFamily.code.var}`]],
      ])
    ),
  ]
}