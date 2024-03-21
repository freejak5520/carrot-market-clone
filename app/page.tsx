export default function Home() {
  2;
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 ">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-3 md:flex-row">
        <input className="w-full rounded-full h-10 bg-gray-200 pl-5 py-3 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow" type="text" placeholder="Search here..." />
        <button className="bg-black text-white py-2 rounded-full active:scale-95 transition-transform font-medium outline-none md:px-10">Search</button>
      </div>
    </main>
  );
}
