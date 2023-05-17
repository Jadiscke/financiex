export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="min-w-screen flex h-full min-h-screen w-full flex-col justify-between bg-gradient-to-br from-gray-700 from-25% via-gray-800 via-50% to-gray-600 to-gray-800 to-75%">
      <header className="fixed left-0 top-0 h-10 w-full bg-gradient-to-b from-emerald-500 to-emerald-800 font-sans text-white">
        <span className="ml-2 mt-2 block text-base font-bold">Financiex</span>
      </header>
      <main className="h-fit min-h-screen w-full px-10 pt-16">{children}</main>
      <footer className="h-fit w-full bg-slate-800 text-gray-500">
        <div className="min-h-10 h-fit p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          corrupti, numquam reprehenderit quaerat voluptatem officia
          perspiciatis voluptate eaque eveniet provident fugiat a rerum,
          aspernatur repudiandae at minima excepturi maxime. Ipsum.
        </div>
      </footer>
    </body>
  );
}
