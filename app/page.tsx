export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5 ">
      <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-xl bg-white p-5 shadow-lg">
        {["1", "me", "you", "Yourself"].map((person, index) => (
          <div
            className="group/item flex items-center gap-4 rounded-xl"
            key={index}
          >
            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
            <span className="text-lg font-medium empty:h-3 empty:w-24 empty:animate-pulse empty:rounded-full empty:bg-gray-300 group-focus-within/item:text-red-500 group-hover/item:text-red-500">
              {person}
            </span>
            <div className="relative flex size-5 items-center justify-center rounded-full bg-red-500 text-white">
              <span className="z-10">{index}</span>
              <div className="absolute size-6 animate-ping rounded-full bg-red-500"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
