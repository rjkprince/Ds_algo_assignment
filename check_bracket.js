const check_bracket = (str_brackets) => {
  const cehck_obj = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const open_brackets = ['[', '{', '('];
  const arr_brackets = str_brackets.split('');
  let result = false;
  let check_stack = [];
  for (let i = 0; i < arr_brackets.length; i++) {
    if (check_stack.length == 0) {
      if (open_brackets.includes(arr_brackets[i])) {
        check_stack.push(arr_brackets[i]);
      } else {
        result = false;
        break;
      }
    } else {
      if (open_brackets.includes(arr_brackets[i])) {
        check_stack.push(arr_brackets[i]);
      } else {
        const prev_brack = check_stack[check_stack.length - 1];
        if (cehck_obj[prev_brack] == arr_brackets[i]) {
          check_stack.pop();
        } else {
          result = false;
          break;
        }
      }
    }
    if (i == arr_brackets.length - 1) {
      if (check_stack.length == 0) {
        result = true;
      }
    }
  }

  return result == true ? 'Success' : 'Fail';
};
