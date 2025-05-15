import React from "react";
import { useDark, usePageData } from "rspress/runtime";
import { Badge } from "../../src/components/ui/Badge";
import randomColor from "randomcolor";

import {randomEmoji} from '../../lib/randomEmoji'

export default function Tags() {
  const tags = usePageData().page.frontmatter.tags as string[];
  const isDark = useDark()
  
  // Check if markdown has tags
  if (!tags) {
    return null;
  }

  return (
    <div className="flex items-center space-x-1">
      {tags.map((tag, index) => {
        const color = randomColor({luminosity: isDark ? "light" : "dark" })
        const backgroundColor = "--secondary"
        return (
          <Badge key={tag}   style={{color,backgroundColor: `var(${backgroundColor})`}}>{randomEmoji()}{tag}</Badge>
        )
      })}
    </div>
  );
}