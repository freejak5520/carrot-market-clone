export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5 ">
      <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-xl bg-white p-5 shadow-lg">
        <div className="group flex flex-col gap-2">
          <input
            className="w-full bg-gray-100"
            placeholder="Write your email"
          />
          <span className="hidden group-invalid:opacity-100 group-focus-within:block">
            Make sure it is a valid email...
          </span>
          <button>Submit</button>
        </div>
      </div>
    </main>
  );
}
