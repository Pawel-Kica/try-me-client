// Tools
import { useState, useEffect } from 'react';
import { useWindowSizes } from './useWindowSizes';
// Types
import type { RefObject } from 'react';

export function useElementVisibility(ref: RefObject<Element>, onVisible: (() => void) | undefined, _rootMargin?: number): boolean {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const { width } = useWindowSizes();

    const rootMargin = typeof _rootMargin !== 'undefined' ? `${Math.abs(_rootMargin) * -1}px` : width > 400 ? '-200px' : '-50px';

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([{ isIntersecting }], observer) => {
                if (isIntersecting) {
                    if (ref.current) observer.unobserve(ref.current as any);
                    setIsVisible(true);

                    if (typeof onVisible === 'function') onVisible();
                }
            },
            { rootMargin },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, onVisible, rootMargin]);

    return isVisible;
}
