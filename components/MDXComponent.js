import { Podcast } from "./Podcast";

const MDXComponent = {
  Podcast,
  h2: (props) => <h2 className="text-purple-500" {...props}></h2>,
};

export default MDXComponent;
