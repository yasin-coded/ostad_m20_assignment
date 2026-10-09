const columns = [
  { title: "Services", links: ["Branding", "Design", "Marketing", "Advertisement"] },
  { title: "Company", links: ["About us", "Contact", "Jobs", "Press kit"] },
  { title: "Legal", links: ["Terms of use", "Privacy policy", "Cookie policy"] },
];

function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-[2fr_1fr_1fr_1fr]">

        <div className="col-span-2 md:col-span-1">
          <img src="/amazon-white-logo.png" alt="Amazon" className="h-10" />
          <p className="mt-4">ACME Industries Ltd.</p>
          <p>Providing reliable tech since 1992</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="mb-3 text-sm font-bold uppercase text-gray-400">{column.title}</h2>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link}>

                  <a
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    className="cursor-pointer hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;