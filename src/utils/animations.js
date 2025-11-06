// 滚动动画工具函数
class ScrollAnimations {
  constructor() {
    this.observer = null;
    this.animatedElements = new Set();
    this.init();
  }

  init() {
    // 创建 Intersection Observer 用于检测元素进入视口
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target);
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  // 为元素添加动画类
  animateElement(element) {
    if (this.animatedElements.has(element)) return;
    
    this.animatedElements.add(element);
    element.classList.add('animate-in');
    
    // 添加动画完成后的回调
    element.addEventListener('animationend', () => {
      element.classList.add('animate-complete');
    }, { once: true });
  }

  // 观察元素
  observe(element) {
    if (this.observer && element) {
      this.observer.observe(element);
    }
  }

  // 观察多个元素
  observeAll(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => this.observe(element));
  }

  // 销毁观察器
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// 平滑滚动函数
export function smoothScrollTo(target, offset = 0) {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// 节流函数 - 优化性能
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 防抖函数 - 优化性能
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 创建滚动动画实例
export const scrollAnimations = new ScrollAnimations();

export default ScrollAnimations;