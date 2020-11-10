export default {
  // el - элемент к которому будет привязываться наша директива
  // bindings - в нем содержаться все необходимые свойства которые ме будем передавать внутрь директивы (READ ONLY)
  // vnode - в нем содержится обьект виртуального дерева где будет содержаться наша директива (READ ONLY)
  bind(el, bindings, vnode) {
    const args = bindings.arg;
    el.style[args] = bindings.value
  }
}
