<script lang="ts">
    export let element = null as null | HTMLElement
    export let once = false;
    export let intersecting = false;
    export let root = null as null | HTMLElement
    export let rootMargin = "0px";
    export let threshold = 0;
    export let entry = null as null | IntersectionObserverEntry
    export let observer = null as null | IntersectionObserver
  
    import { tick, createEventDispatcher, afterUpdate, onMount } from "svelte";
  
    const dispatch = createEventDispatcher();
    let prevRootMargin = null as null | string
    let prevElement = null as null | HTMLElement
  
    const initialize = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((_entry) => {
            entry = _entry;
            intersecting = _entry.isIntersecting;
          });
        },
        { root, rootMargin, threshold }
      );
    };
  
    onMount(() => {
      initialize();
  
      return () => {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
      };
    });
  
    afterUpdate(async () => {
      if (entry !== null) {
        dispatch("observe", entry);
  
        if (entry.isIntersecting) {
          dispatch("intersect", entry);
  
          if (element && once) observer?.unobserve(element);
        }
      }
  
      await tick();
  
      if (element !== null && element !== prevElement) {
        observer?.observe(element);
  
        if (prevElement !== null) observer?.unobserve(prevElement);
        prevElement = element;
      }
  
      if (prevRootMargin && rootMargin !== prevRootMargin) {
        observer?.disconnect();
        prevElement = null;
        initialize();
      }
  
      prevRootMargin = rootMargin;
    });
  </script>
  
  <slot {intersecting} {entry} {observer} />
 