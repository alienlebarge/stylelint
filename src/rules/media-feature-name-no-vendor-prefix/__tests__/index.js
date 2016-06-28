import { testRule } from "../../../testUtils"
import rules from "../../../rules"
import { ruleName, messages } from ".."

const rule = rules[ruleName]

testRule(rule, {
  ruleName,
  config: [true],

  accept: [{
    code: "@media (min-resolution: 96dpi) {}",
  }],

  reject: [ {
    code: "@media (-webkit-min-device-pixel-ratio: 1) {}",
    message: messages.rejected,
    line: 1,
    column: 9,
  }, {
    code: "@media (-wEbKiT-mIn-DeViCe-PiXeL-rAtIo: 1) {}",
    message: messages.rejected,
    line: 1,
    column: 9,
  }, {
    code: "@media (-WEBKIT-MIN-DEVICE-PIXEL-RATIO: 1) {}",
    message: messages.rejected,
    line: 1,
    column: 9,
  }, {
    code: "@media\n\t(min--moz-device-pixel-ratio: 1) {}",
    message: messages.rejected,
    line: 2,
    column: 3,
  }, {
    code: "@media   (-o-max-device-pixel-ratio: 1/1) {}",
    message: messages.rejected,
    line: 1,
    column: 11,
  } ],
})
