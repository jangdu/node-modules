// package.json에서 type module설정하면
// export import가능
let count = 0;
export function increase() {
  count++;
}

export function getCount() {
  count;
}
