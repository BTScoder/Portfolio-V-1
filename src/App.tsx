
function App() {


  return (
    <>
      <section className="h-screen relative overflow-hidden">
        <div className="flex flex-col items-center pt-20 lg:absolute lg:right-0 lg:top-0 ">
          <div className="space-y-4">
            <h1 className="text-6xl ">푸트폴리오</h1>
            <p className="text-sm font-uppercase text-end">[Puurtfolio]</p>
          </div>
          <img src="/images/catt.svg" alt="A cute cat" className="border lg:h-170 lg:w-170 h-120 w-120 " />
        </div>
        <div className="grid-background h-70 w-full z-10 fixed top-0 lg:static" />

      </section>
    </>
  )
}

export default App
