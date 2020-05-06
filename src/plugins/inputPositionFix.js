/**
 * 部分手机，在使用 fixed 定位时，键盘弹出会导致 dom 元素错位
 * 键盘收起后，页面滚动一下可以解决
 */
function inputPositionFix() {
  let timeout = null;
  window.addEventListener(
    "blur",
    e => {
      if (e.target.nodeName == "INPUT" || e.target.nodeName == "TEXTAREA") {
        timeout = setTimeout(() => {
          scroll();
        }, 200);
      }
    },
    true
  );
}
function scroll() {
  if (document.activeElement == document.body) {
    const h = document.body.scrollTop || document.documentElement.scrollTop;
    window.scrollTo(0, h + 1);
  }
}

inputPositionFix();