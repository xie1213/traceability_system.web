import { onMounted, onBeforeUnmount } from 'vue';

export default function useScreenAdaptation() {
  // 默认缩放值
  const scale = {
    width: '1',
    height: '1',
  };

  // 设计稿尺寸（px）
  const baseWidth = 1920;
  const baseHeight = 1080;
  // 需保持的比例（默认1.77778）
  const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5));

  // 定时函数
  let drawTiming = null;

  function calcRate() {
    const appRef = document.querySelector('[data-ref="zoom"]');
    if (!appRef) return;

    const currentRate = parseFloat((window.innerWidth / window.innerHeight).toFixed(5));

    if (appRef) {
      if (currentRate > baseProportion) {
        scale.width = ((window.innerHeight * baseProportion) / baseWidth).toFixed(5);
        scale.height = (window.innerHeight / baseHeight).toFixed(5);
        appRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`;
      } else {
        scale.height = ((window.innerWidth / baseProportion) / baseHeight).toFixed(5);
        scale.width = (window.innerWidth / baseWidth).toFixed(5);
        appRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`;
      }
    }
  }

  function resize() {
    clearTimeout(drawTiming);
    drawTiming = setTimeout(() => {
      calcRate();
    }, 200);
  }

  onMounted(() => {
    calcRate();
    window.addEventListener('resize', resize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize);
  });

  return {
    scale,
    calcRate,
    resize
  };
}
