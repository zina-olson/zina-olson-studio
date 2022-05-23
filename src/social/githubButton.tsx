import git from './../logos/github.svg';

export function githubButton() {
  return (
    <a href="https://github.com/zina-olson" rel="noopener" target={'_blank'}>
      <button className="">
        <img src={git} className="h-12 w-12" alt="github" />
      </button>
    </a>
  );
}
