export const floor = (n: number) => Math.floor(n);
export const random = (min: number, max: number) => Math.random() * (max - min) + min;
export const map = (n: number, start1: number, stop1: number, start2: number, stop2: number) => (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;

export const getWidth = () => window.innerWidth;
export const getHeight = () => window.innerHeight;
export const getSize = (n: number) => n;
