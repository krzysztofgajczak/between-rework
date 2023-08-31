import Link from "next/link";
import Image from "next/image";

const Offer = () => {
    return (
        <>
            <div className="bg-secondary section" id="offer-section">
                <h1 className="text-4xl p-10 font-semibold text-white">Oferta</h1>
            </div>
            <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-16 bg-slate-100  md:bg-contain md:bg-no-repeat md:bg-center md:min-h-fit">
                <div className="">
                    <h1 className="text-3xl border-b-2 mb-5 pb-5 border-secondary text-center">Dowiedz się więcej</h1>
                    <div className="text-center justify-center max-w-md mx-auto">
                        <p>Zapraszamy do lokalu na domowe posiłki.</p><br />
                        <p>Oferujemy realizację zamówień cateringowych, obsługę imprez okolicznościowych, posiłki dla firm oraz dowozy obiadów dla klientów indywidualnych.</p><br />
                        <p>Cena usługi jest ustalana indywidualnie.</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl border-b-2 mb-5 pb-5 border-complementary text-center md:mt-0 mt-10">Dowozy w Pyszne.pl</h1>
                    <div className="text-center">
                        <p>Współpracujemy z Pyszne.pl</p>
                        <p>Zapraszamy do zamówień on-line</p>
                        <div className="justify-center flex mt-10">
                            <Link href="https://www.pyszne.pl/menu/between" target="blank">
                                <Image
                                    src="/pyszne.png"
                                    alt="pyszne.pl"
                                    width={500}
                                    height={100}
                                >
                                </Image>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Offer;