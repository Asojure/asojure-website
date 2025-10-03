import { ref, onMounted, onUnmounted, type Ref } from 'vue';

/**
 * Composable to track if an element is visible in the viewport
 * @param elementId - The ID of the element to track
 * @param invert - If true, returns true when element is NOT visible
 * @returns A ref that indicates visibility state
 */
export function useElementVisibility(elementId: string, invert = false): Ref<boolean> {
  const isVisible = ref(false);

  const checkVisibility = () => {
    const element = document.getElementById(elementId);

    if (!element) {
      isVisible.value = invert;
      return;
    }

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Element is visible if any part is in viewport
    const elementVisible = rect.bottom >= 0 && rect.top <= windowHeight;

    isVisible.value = invert ? !elementVisible : elementVisible;
  };

  onMounted(() => {
    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', checkVisibility);
    window.removeEventListener('resize', checkVisibility);
  });

  return isVisible;
}
