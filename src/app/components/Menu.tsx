
const data = `<div>MENU CZWARTEK 🙂</div>
<div>31.00</div>
<div>🍰KRUCHE CIASTO Z KARMELIZOWANYMI ŚLIWKAMI 7 ZŁ KAWALEK 😍</div>
<div>🥤KOKTAJL TRUSKAWKOWY 8 zł</div>
<div>❤DO ZESTAWU OBIADOWEGO Z ZUPĄ KOMPOT GRATIS❤</div>
<div>💥HAPPY HOUR 17.00 do 18.00 DOSTEPNE ZESTAWY OBIADOWE 2 ZŁ TANIEJ 💥</div>
<div>OTWARTE OD 8.30 do 18.30</div>
<div>OBIADY OD 12.00 DO 18.00</div>
<div>świeże, różnorodne bułki w cenach od 5.00 do 13.00 zł,</div>
<div>Obiady wydajemy</div>
<div>NA WYNOS NA MIEJSCU DOWÓZ</div>
<div>pojemniki na wynos płatne 1 zł zupa 1.50 drugie danie 2 zł zestaw</div>
<div>509951330☎️</div>
<div>(Zadzwoń - zamów- odbierz ) PARKING PRZY LOKALU</div>
<div>To zajmie Ci 5 minut</div>
<div>KAWA ☕</div>
<div>7 ZŁ 0.4 BIAŁA</div>
<div>6 ZŁ 0.2 BIAŁA LUB CZARNA 0.2</div>
<div>2 ZŁ SYROP do kawy</div>
<div>☎️ DOWÓZ 🚘🚗🚘 powyżej 40 zł. W godzinach 12.00 – 16.30 DO 3 KM</div>
<div>PŁATNOŚĆ GOTOWKĄ KARTĄ LUB BLIK</div>
<div>💥SOSY: czosnkowy, ostry,</div>
<div>💥DODATKI: ziemniaki tłuczone, pieczone ziemniaki w mundurkach, ryż, kasza</div>
<div>💥SURÓWKA: buraki z chrzanem, kapusta biała z ogorkiem zielonym, ogórek kiszony</div>
<div>💥Zupy 8.00</div>
<div>JARZYNOWA Z MAKARONEM 🥬</div>
<div>ŻUREK Z ZIEMNIAKAMI I KIEŁBASĄ 🐷</div>
<div>💥OBIAD DNIA /zupa 21.00/ 25.00</div>
<div>FILET Z KURCZAKA W PANIERCE SEZAMOWEJ dodatki surówka 🐤</div>
<div>ZESTAW/ZUPA</div>
<div>💥KURCZAK PO WIETNAMSKU dodatki surówka 25.00/30.00🐥</div>
<div>💥KOTLET SCHABOWY ZAPIEKANY Z POTRAWKĄ Z PAPRYKI dodatki surówka 25.00/30.00🐷</div>
<div>💥PENNE Z KURCZAKIEM I GRZYBAMI LEŚNYMI W SOSIE ŚMIETANOWYM Z PARMEZANEM 25.00/30.00🐤</div>
<div>💥PLACKI ZIEMNIACZANE Z GULASZEM WIEPRZOWYM surówka 24.00/29.00🐷</div>
<div>💥PLACKI ZIEMNIACZANE Z SOSEM PIECZARKOWYM surówka 23.00/28.00🥬</div>
<div>💥FASOLKA PO BRETOŃSKU Z PIECZYWEM 19.00/24.00🐖</div>`

const Menu = () => {
    return (
        <>
            <section className="section bg-slate-100" id="menu-section">
                <div className="items-center justify-start bg-complementary mx-auto flex">
                    <h2 className="text-4xl p-10 font-semibold text-white">Dzisiaj w Between</h2>
                </div>

                <div className="items-center justify-center max-w-2xl mx-7 flex md:mx-auto bg-slate-200 border-2 border-secondary rounded-md shadow-md p-4 my-10">
                    <div dangerouslySetInnerHTML={{ __html: data }} />
                </div>
            </section>
        </>
    );
}

export default Menu;