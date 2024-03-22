export default function Home() {
  2;
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5 ">
      <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg md:flex-row">
        <input
          className="peer h-10 w-full rounded-full bg-gray-200 py-3 pl-5 outline-none ring ring-transparent transition-shadow focus:ring-green-500 invalid:focus:ring-red-500"
          type="email"
          required
          placeholder="Email address"
        />
        <span className="hidden font-medium text-red-500 peer-invalid:block">
          Email is required.
        </span>
        <button className="whitespace-nowrap rounded-full bg-black py-2 font-medium text-white outline-none transition-transform active:scale-95 peer-invalid:bg-gray-300 md:px-10">
          Log in
        </button>
      </div>
    </main>
  );
}
