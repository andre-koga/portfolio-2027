import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        {/* <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header> */}
        <div className="mx-2 sm:mx-10 text-center font-mono text-xl space-y-8">
          <p>
            Hey there, this is my portfolio website. It is not yet done, I am putting a lot of attention and care into it.
          </p>
          <p>While you're waiting for it to be done, check these links:</p>
          <ul className="space-y-2">
            <li className="hover:underline">
              <a href="https://github.com/andre-koga" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li className="hover:underline">
              <a href="https://www.linkedin.com/in/andrehkoga/" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </li>
            <li className="hover:underline">
              <a href="https://x.com/andrehkoga" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
          <p>Appreciate the patience!</p>
          <p>- André H. Koga</p>
        </div>
      </div>
    </main>
  );
}