export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="flex flex-col justify-between min-h-screen min-w-screen h-full w-full bg-gradient-to-br from-gray-700 from-25% via-gray-800 via-50% to-gray-800 to-75% to-gray-600">
      <header className="text-white top-0 left-0 h-10 font-sans w-full fixed bg-gradient-to-b from-emerald-500 to-emerald-800">
        <span className="text-base mt-2 ml-2 block font-bold">
          Financiex
        </span>
      </header>
      <main className="w-full h-fit pt-16 px-10 min-h-screen">
        {children}
      </main>
      <footer className="w-full h-fit bg-slate-800 text-gray-500">
        <div className="min-h-10 h-fit p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti, numquam reprehenderit quaerat voluptatem officia perspiciatis voluptate eaque eveniet provident fugiat a rerum, aspernatur repudiandae at minima excepturi maxime. Ipsum.
        </div>
      </footer>
    </body>
  )
}