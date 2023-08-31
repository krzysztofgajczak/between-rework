import Link from "next/link";

const Contact = () => {
    return (
        <>
            <div className="bg-primary mt-10 section" id="contact-section">
                <h1 className="text-4xl p-10 font-semibold text-white">Kontakt</h1>
            </div>
            <section className="grid grid-cols-1  mt-16 bg-white min-h-screen">
                <div className="">
                    <h1 className="text-3xl border-b-2 mb-5 pb-16 border-primary text-center font-semibold">Znajdziesz nas tutaj</h1>
                    <div className="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319.98660860915265!2d19.90049457216536!3d50.088292616755105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a33f35826ef%3A0x107e7d7f76e062f0!2sBetween%20Krystyna%20Pietras!5e0!3m2!1spl!2spl!4v1693496963877!5m2!1spl!2spl" width="100%" height="450" loading="lazy" ></iframe>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl border-b-2 mb-10 pb-5 border-secondary text-center mt-10 font-semibold">Skontaktuj się z nami</h1>
                    <div className="text-center">
                        <p className="mb-5 font-bold">Telefon: <a className="text-primary hover:underline" href="tel:509 951 330">509 951 330 </a> |<a className="text-primary hover:underline" href="tel:507 170 590"> 507 170 590</a> </p>
                        <p className="font-bold">E-mail: <a className="text-complementary hover:underline" href="mailto:pietraskris@interia.pl">pietraskris@interia.pl</a></p>
                        <div className="flex justify-center items-center mt-10">
                            <Link href="https://www.facebook.com/profile.php?id=100063491246844" target="blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                                    <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="justify-center flex mt-20">

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;