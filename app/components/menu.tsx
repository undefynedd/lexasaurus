import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import Link from "next/link"

const links = [
    { href: "/lists", label: "lists" },
    { href: "/create", label: "create" },
    { href: "/about", label: "about" },
    { href: "/feedback", label: "feedback" },
]

export default function NavBar() {
    return (
        <>
            <div className="relative font-display tracking-widest transition-all hover:tracking-[0.5em] motion-reduce:transition-none motion-reduce:hover:tracking-widest motion-reduce:hover:brightness-90 dark:motion-reduce:hover:brightness-150 text-center text-primary-fg text-4xl mt-5 z-30"><Link href="#">Lexasaurus</Link></div>
            <div className="bg-background border-b border-midground w-full flex justify-between mt-1 lg:-mt-3">
                <div className="hidden md:flex">
                    {links.map((link) => (
                        <Link key={link.label} href={link.href} className="bg-background px-5 py-3 hover:brightness-90 dark:hover:brightness-150">{link.label}</Link>
                    ))}
                </div>
                <Menu>
                    <MenuButton className="data-active bg-background hover:brightness-90 dark:hover:brightness-150">
                        <svg className="flex md:hidden fill-current h-5 mx-3 my-auto" viewBox="0 0 448 512"><path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"/></svg>
                    </MenuButton>
                    <MenuItems anchor="bottom start" className="relative md:hidden data-open mt-3 flex flex-col">
                        {links.map((link) => (
                            <MenuItem key={link.href} as="div">
                                <a href={link.href} className="block bg-background px-5 py-3 hover:brightness-90 dark:hover:brightness-150 list-none">{link.label}</a>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>
                <a href="/login" className="bg-background px-5 py-3 hover:brightness-90 dark:hover:brightness-150">login?</a>
            </div>
        </>
    );
}
