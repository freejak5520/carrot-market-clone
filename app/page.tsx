
export default function Home() {2
  return (<main className="bg-gray-100 h-screen flex items-center justify-center p-5 dark:bg-gray-700 dark:text-white">
<div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm dark:bg-gray-600">
  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <span className="text-gray-600 font-semibold -mb-1 dark:text-gray-300">In transit</span>
      <span className="text-4xl font-semibold dark:text-white">Coolblue</span>
    </div>
    <div className="bg-blue-400 size-12 rounded-full"/>
  </div>

  <div className="flex my-3 items-center gap-1">
    <span className="bg-green-400 text-white px-4 py-1 rounded-full text-xs font-medium hover:bg-green-500 hover:scale-105 cursor-default uppercase transition">Today</span>
    <span className="text-sm dark:text-gray-200">9:30-10:30</span>
  </div>

<div className="relative">
  <div className="bg-gray-200 w-full h-2 rounded-full absolute"></div>
  <div className="bg-green-400 w-2/3 h-2 rounded-full absolute"></div>
</div>

  <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-300">
    <span>Expected </span>
    <span>Sorting center</span>
    <span>In transit</span>
    <span className="text-gray-400 dark:text-gray-500">Delivered</span>
  </div>

</div>

  </main>);
}
