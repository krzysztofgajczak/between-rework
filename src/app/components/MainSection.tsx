import Link from "next/link";

const MainSection = () => {
  return (
    <section className="font-mono top-0 min-h-screen flex flex-col justify-center items-center bg-[#040219] bg-opacity-50 bg-[url('/background.jpg')] bg-center bg-fixed bg-cover bg-no-repeat bg-blend-darken" id="main-section">
      <div className="title text-8xl text-primary">
        <h1 className=" border-spacing-2 border-b-4 border-secondary">between</h1>
      </div>
      <h2 className="lg:text-4xl text-3xl text-white p-6 mt-4">
      BISTRO | CATERING | DOWOZY
      </h2>
      <Link href="#offer-section">
        <button className="bg-complementary text-2xl text-white px-4 py-2 rounded-lg mt-4 hover:scale-125">
          Dowiedz się więcej
        </button>
      </Link>
      <div className="text-2xl text-white p-6 rounded-lg mt-4">
        CZYNNE PN - PT | 8:30 - 18:30
      </div>
    </section>
  );
}

export default MainSection;