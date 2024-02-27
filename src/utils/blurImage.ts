const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

const shimmer = (size: number) => `
  <svg width="${size}" height="${size}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${size}" height="${size}" fill="#333" />
    <rect id="r" width="${size}" height="${size}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${size}" to="${size}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

export const blurImgUrl = (size: number) => {
  return `data:image/svg+xml;base64,${toBase64(shimmer(size))}`;
};

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
// const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

// const triplet = (e1: number, e2: number, e3: number) =>
//   keyStr.charAt(e1 >> 2) +
//   keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
//   keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
//   keyStr.charAt(e3 & 63);

// export const rgbDataURL = (red: number, green: number, blue: number) =>
//   `data:image/gif;base64,R0lGODlhAQABAPAA${
//     triplet(0, red, green) + triplet(blue, 255, 255)
//   }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
