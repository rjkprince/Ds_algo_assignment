const extending_stack_interface = (n, queries) => {
  const stack = [];
  const max_stack = [-100000000];
  for (let i = 0; i < n; i++) {
    let query = queries[i].split(' ')[0];
    let num = queries[i].split(' ')[1];
    switch (query) {
      case 'push':
        stack.push(num);
        if (num > max_stack[max_stack.length - 1]) max_stack.push(num);
        break;
      case 'pop':
        let number = stack.pop();
        if (number == max_stack[max_stack.length - 1]) max_stack.pop();
        break;
      case 'max':
        console.log(
          max_stack[max_stack.length - 1] == -100000000
            ? 0
            : max_stack[max_stack.length - 1]
        );
        break;
      default:
        console.log('Invalid Input');
        break;
    }
  }
  // javascript returns undefined by default so to overide it I gave empty string

  return '';
};
