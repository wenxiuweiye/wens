import {
  loadOml2d,
  Oml2dEvents,
  Oml2dMethods,
  Oml2dProperties,
} from "oh-my-live2d";
import React from "react";
import { JSX, useEffect } from "react";

export default function Live2D() {
  const [live2d, setLive2d] = React.useState<
    (Oml2dProperties & Oml2dMethods & Oml2dEvents) | null
  >(null);
  useEffect(() => {
    const oml2d = loadOml2d({
      tips: (_, currentIndex) => {
        return {
          copyTips: {
            message: ["复制了什么捏? 要不要确认一下？"],
          },
          idleTips: {
            wordTheDay: true,
          },
        };
      },
      ...(process.env.live2dProps as any),
    });

    setLive2d(oml2d);
  }, []);
  return null;
}
