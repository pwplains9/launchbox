import data from '@data/data';

export { getScrollbarWidth } from './get-scrollbar-width';
export { lockScroll, isScrollLocked } from './lock-scroll';

export const baseDir = data.general.baseDir;

export const isDevices = () => innerWidth <= 1024;

export const clearText = (text) => text.trim().replace(/\s+/g, ' ');

export const isAnimating = (state) => {
    if (typeof state !== 'undefined') {
        document.documentElement.classList.toggle('is-animating', state);
    }

    return document.documentElement.classList.contains('is-animating');
};

export const dataPage = (name) => {
    if (typeof name !== 'undefined') {
        document.documentElement.setAttribute('data-page', name);
    }

    return document.documentElement.getAttribute('data-page');
};
