export default {
  bind: function (el, binding, vnode) {
    let routes = binding.value[0].options.routes;
    const permit = binding.value[1].split('/');
    const have = check(routes, permit, 0);
    if (!have) {
      el.parentNode.removeChild(el);
    }
  }
}

function check(route, permit, i) {
  for (let item of route) {
    if (!permit[i]) permit[i] = '/';
    if (item.path === permit[i]) {
      if (i === permit.length - 1) {
        return true;
      } else if (item.children) {
        return check(item.children, permit, i + 1);
      } else {
        return false
      }
    }
  }
  return false
}
