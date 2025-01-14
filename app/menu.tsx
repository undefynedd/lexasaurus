import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"

const links = [
    { href: "/lists", label: "lists" },
    { href: "/create", label: "create" },
    { href: "/about", label: "about" },
    { href: "/feedback", label: "feedback" },
]

export default function NavBar() {
    return (
        <>
            <div className="relative text-center text-3xl mt-5 z-30"><a href="#">Lexasaurus</a></div>
            <div className="bg-background border-b border-midground w-full flex justify-between mt-1 lg:-mt-3">
                <div className="hidden md:flex">
                    {links.map((link) => (
                        <a key={link.label} href={link.href} className="bg-background px-5 py-3 hover:brightness-90 dark:hover:brightness-150">{link.label}</a>
                    ))}
                </div>
                <Menu>
                    <MenuButton className="data-active">
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
