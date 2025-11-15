import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import type { MDXComponents } from "mdx/types";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Banner } from "fumadocs-ui/components/banner";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => (
      <ImageZoom
        className="outline-2 outline-black/10 rounded-xl outline-offset-[-2px]"
        {...(props as any)}
      />
    ),
    Step,
    Steps,
    Banner,
    ...components,
  };
}
