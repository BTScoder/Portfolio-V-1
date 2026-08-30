
function App() {


  return (
    <>

      <main className="overflow-hidden relative h-screen">
        <div className="grid-background h-70 w-full z-10 relative top-0 lg:static" />
        <section className="absolute h-screen w-full inset-0  z-10 grid lg:grid-cols-[800px_1fr] ">
          <div className="h-full w-full border hidden lg:block">

          </div>

          <div className="flex flex-col items-center pt-20 lg:absolute lg:right-0 lg:top-0 border">
            <div className="space-y-4">
              <h1 className="text-6xl ">푸트폴리오</h1>
              <p className="text-sm font-uppercase text-end">[Puurtfolio]</p>
            </div>
            <img src="/images/catt.svg" alt="A cute cat" className="lg:h-170 lg:w-170 h-100 w-100 " />
          </div>

          <div className="h-600 -mt-50 border w-full block lg:hidden">
            <div className="w-40 h-40 bg-neutral-700 a" />
            <div className="w-40 h-40 bg-neutral-700 " />
            <div className="w-40 h-40 bg-neutral-700 " />
            <div className="w-40 h-40 bg-neutral-700 " />
          </div>
        </section>
      </main>


    </>
  )
}

export default App
