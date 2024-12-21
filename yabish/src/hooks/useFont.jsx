import { useMemo } from "react";

export function useFont(text) {
  const englishFont = process.env.REACT_APP_FONT_EN || "Koulen, sans-serif";
  const chineseFont = process.env.REACT_APP_FONT_ZH || '"思源黑体", sans-serif';

  const isChinese = /[\u4e00-\u9fa5]/.test(text);

  return useMemo(
    () => (isChinese ? chineseFont : englishFont),
    [isChinese, englishFont, chineseFont]
  );
}
