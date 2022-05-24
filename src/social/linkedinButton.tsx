import linkedin from './../logos/linkedin.svg';

export function linkedinButton() {
  return (
    <a
      href="https://www.linkedin.com/in/zinaolson"
      rel="noopener"
      target={'_blank'}
    >
      <button className="">
        <img src={linkedin} className="h-12 w-12" alt="linkedin" />
      </button>
    </a>
  );
}
