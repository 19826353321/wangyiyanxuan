// 全局风格定义 是最重要的
// 老板 + 设计师  风格是样式的灵魂 
export const px2rem = (px: number): string => {
    return `${px / 20}rem`
  };
export default {
    "theme-color": "#de1c1d",
    "search-color":"#f3343c",
    "font-color-dark":"#333333",
    "font-color-light":"#7f7f7f",
    "font-size-s": "0.6rem",
    "font-size-m": "0.7rem",
    "font-size-l": "0.75rem", 

    // "search-bgcolor": "#f6f6f6",
    // "search-color": "#a5a5a5",
    // "color-light": "#121212",
    // "weight-light": "600",


    // "font-color":"#111111",
    // "font-size-s": "12px",
    // "font-color": "#111111",
    // 
    // "font-color-desc": "#2E30e0",
    // "font-color-desc-v2": "rgba(228, 228, 228, 0.1)",

    // "background-color": "#f2f3f4",
    // "border-color": "#e4e4e4",
    // "highlight-background-color": "#fff",
    // "font-color-light":"#f1f1f1",
    // "font-color-desc":"#2E30e0",

}
