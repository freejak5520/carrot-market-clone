import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between p-5">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">CarrotCarrot</h1>
        <h2 className="text-center text-2xl">
          CarrotCarrot is your market for trading in your neighborhood.
        </h2>
      </div>
      <div />
      <div className="flex w-full flex-col items-center gap-3">
        <Link href="/join" className="btn-primary py-2.5 text-lg">
          Get Started
        </Link>
        <div className="flex gap-2">
          <span>Already have an account?</span>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
