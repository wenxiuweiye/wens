import React from "react";
import { Avatar, AvatarImage } from "../../src/components/ui/avatar";
import { usePageData } from "rspress/runtime";

type Author = {
  image: string;
  name: string;
  description?: string;
  socials?: {
    qq?: string;
    github?: string;
    xhs?: string;
    bilibili?: string;
  };
};

export default function Author() {
  const pageData = usePageData();

  const authors = pageData.page.frontmatter.authors as Author[];

  return authors ? (
    <div className="flex items-center mb-4 flex-wrap">
      {authors.map((author) => (
        <div className="flex space-x-3 w-1/2">
          <Avatar className=" w-14 h-14">
            <AvatarImage src={author.image} />
          </Avatar>
          <div className="flex flex-col space-y-0">
            <div className=" font-bold text-lg">{author.name}</div>
            {author.description ? (
              <div className=" text-sm text-gray-500">{author.description}</div>
            ) : null}
            {author.socials ? (
              <div className=" flex items-center space-x-1">
                {author.socials.qq ? (
                  <a href={author.socials.qq}>
                    <span className="icon-[cib--tencent-qq] w-4 h-4 "></span>
                  </a>
                ) : null}
                {author.socials.github ? (
                  <a href={author.socials.github}>
                    <span className="icon-[akar-icons--github-fill] w-4 h-4 "></span>
                  </a>
                ) : null}
                {author.socials.xhs ? (
                  <a href={author.socials.xhs}>
                    <span className=" bg-red-600 icon-[arcticons--xhs] w-12 h-12"></span>
                  </a>
                ) : null}
                {author.socials.bilibili ? (
                  <a href={author.socials.bilibili}>
                    <span className=" bg-blue-600 icon-[ant-design--bilibili-outlined] w-5 h-5"></span>
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
