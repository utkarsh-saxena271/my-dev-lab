import Link from "next/link"

const Navbar = () => {
    const links = [
        {
            name: "docs",
            href: '#'
        },
        {
            name: "about",
            href: '#'
        },
        {
            name: "contact",
            href: '#'
        },
        {
            name: "login",
            href: '#'
        }
    ]
    return (
        <div className="flex items-center justify-between px-6 py-2 bg-gray-900 mt-2 mx-5 rounded-3xl shadow-sm shadow-slate-400 border border-slate-500">
            <h1 className="text-xl font-bold tracking-tight">Logo</h1>
            <div className="flex items-center gap-8">
                {links.map((link, idx) => {
                    return <Link className="font-thin text-lg text-slate-200 hover:text-slate-400 hover:scale-105 transition-all ease-in-out duration-200" key={idx} href={link.href}>{link.name}</Link>
                })}
            </div>
        </div>
    )
}

export default Navbar