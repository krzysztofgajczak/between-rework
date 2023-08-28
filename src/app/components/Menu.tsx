
const data = `<div>Menu poniedziałek</div>
<div>🥤KOKTAJL TRUSKAWKOWY 8zł</div>
<div>❤DO ZESTAWU OBIADOWEGO Z ZUPĄ KOMPOT GRATIS❤</div>
<div>💥HAPPY HOUR 17.00 do 18.00 DOSTEPNE ZESTAWY OBIADOWE 2 ZŁ TANIEJ 💥</div>`

const Menu = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: data }} />
    );
}

export default Menu;