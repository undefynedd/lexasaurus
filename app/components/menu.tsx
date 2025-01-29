import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import Link from "next/link"

const leftLinks = [
    { href: "/lists", label: "lists" },
    { href: "/create", label: "create" },
    { href: "/about", label: "about" },
    { href: "/feedback", label: "feedback" },
]

const rightLinks = [
    { href: "/login", label: "login?" },
    { href: "/search", label: "feedback" },
]

export default function NavBar() {
    return (
        <>
            <div className="relative bg-background font-display tracking-widest text-center text-primary-fg text-4xl mt-5 z-40"><Link href="/" className="hover:scale-110 hover:tracking-[0.2em] transition-all motion-reduce:transition-none motion-reduce:hover:tracking-widest motion-reduce:hover:scale-100 hover:brightness-150 inline-block">Lexasaurus</Link></div>
            <div className="sticky top-0 bg-background border-b border-midground w-full flex justify-between mt-1 lg:-mt-3">
                <div className="hidden md:flex">
                    {leftLinks.map((link) => (
                        <Link key={link.label} href={link.href} className="bg-background px-5 py-3 transition hover:bg-midground">{link.label}</Link>
                    ))}
                </div>
                <Menu>
                    <MenuButton className="data-active bg-background transition hover:bg-midground">
                        <svg className="flex md:hidden fill-current h-5 mx-3 my-auto" viewBox="0 0 448 512"><path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"/></svg>
                    </MenuButton>
                    <MenuItems anchor="bottom start" className="relative md:hidden data-open mt-3 flex flex-col">
                        {leftLinks.map((link) => (
                            <MenuItem key={link.href} as="div">
                                <Link href={link.href} className="block bg-background px-5 py-3 transition hover:bg-midground list-none">{link.label}</Link>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>
                <Link href="/login" className="bg-background px-5 py-3 transition hover:bg-midground">login?</Link>
            </div>
        </>
    );
}
