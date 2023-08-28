const Footer = () => {
    return (
        <footer className=" bg-secondary h-44 flex flex-col justify-center items-center text-white">
            <div className="mb-4">Josepha Conrada 37, Kraków, Polska | Telefon: 509 951 330 | 507 170 590 | E-mail: <a className="text-white underline" href="mailto:pietraskris@interia.pl">pietraskris@interia.pl</a></div>
            <div>&copy; Between {new Date().getFullYear()}</div>
        </footer>
    );
}

export default Footer;