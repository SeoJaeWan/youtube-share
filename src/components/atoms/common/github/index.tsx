import { FaGithub } from "react-icons/fa6";
import GithubStyle from "./github.style";
import Link from "next/link";

const Github = () => {
  return (
    <Link
      href="https://github.com/SeoJaeWan/youtube-share"
      passHref
      legacyBehavior
    >
      <GithubStyle.Container target="_blank">
        <FaGithub size={40} />
      </GithubStyle.Container>
    </Link>
  );
};

export default Github;
