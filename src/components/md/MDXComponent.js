import { ImageMe } from "./ImageMe";
import { SpanMe } from "./SpanMe";
import { Iframe } from "./Iframe";
import { Skills } from "@/components/global/Skills";

const MDXComponent = {
  Skills,
  ImageMe,
  SpanMe,
  Iframe,
  h1: (props) => (
    <h1
      className="font-bold text-black-300 dark:text-dark-100 text-3xl my-7"
      {...props}
    ></h1>
  ),
  h3: (props) => (
    <h3
      className="font-bold text-black-300 dark:text-dark-100 text-lg mt-5"
      {...props}
    ></h3>
  ),
  p: (props) => (
    <p
      className="text-md my-3 text-black-300 dark:text-dark-100 font-light"
      {...props}
    ></p>
  ),
  a: (props) => (
    <a
      className="text-blue-500 dark:text-dark-blue hover:underline"
      {...props}
    ></a>
  ),
  section: (props) => <section className="flex gap-2" {...props}></section>,
  ul: (props) => (
    <ul
      className="list-disc ml-5  text-black-300 dark:text-dark-100 font-light text-md"
      {...props}
    ></ul>
  ),
};

export default MDXComponent;
