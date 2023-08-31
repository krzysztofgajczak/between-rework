const Footer = () => {
    return (
        <footer className=" bg-secondary h-44 w-auto flex flex-col justify-center items-center text-white">
            <p className="">Josepha Conrada 37, Kraków, Polska</p>
            <p>Telefon: <a className="text-white underline" href="tel:509 951 330">509 951 330 </a> |<a className="text-white underline" href="tel:507 170 590"> 507 170 590</a> </p>
            <p>E-mail: <a className="text-white underline" href="mailto:pietraskris@interia.pl">pietraskris@interia.pl</a></p>
            <p>&copy; Between {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;