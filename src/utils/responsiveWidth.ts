const WINDOW_WIDTH = 1440;

export const responsiveWidth = (size: number) => {
  return `${(size / WINDOW_WIDTH) * 100}vw`;
};
