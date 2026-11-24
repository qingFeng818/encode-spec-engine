/**
 * 将 error 级别的 style 规则降级为 warn
 */

import styleConfig from "../../rules/base/style.js";

// 将 error 级别规则都改为 warn 级别
function setErrorRulesToWarn(config) {
  const { rules } = config;
  const newRules = {};

  for (const ruleName in rules) {
    if (Object.prototype.hasOwnProperty.call(rules, ruleName)) {
      const ruleValue = rules[ruleName];
      if (Array.isArray(ruleValue)) {
        // 'array-bracket-spacing': [ 'error', 'never' ] 这种规则写法
        if (ruleValue[0] === "error") {
          newRules[ruleName] = ["warn", ...ruleValue.slice(1)];
        } else {
          newRules[ruleName] = ruleValue;
        }
      } else if (ruleValue === "error") {
        // 'new-parens': 'error' 这种规则写法
        newRules[ruleName] = "warn";
      } else {
        newRules[ruleName] = ruleValue;
      }
    }
  }

  return {
    rules: newRules,
  };
}

export default setErrorRulesToWarn(styleConfig);
