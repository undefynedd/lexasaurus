export default function Menu() {
    return (
	<nav className="bg-primary dark:bg-primary-dark border-b border-foreground/50 w-full flex justify-between">
	    <span className="hidden md:flex">
		<MenuItem>lists</MenuItem>
	    	<MenuItem>create</MenuItem>
	    	<MenuItem>about</MenuItem>
	    	<MenuItem>feedback</MenuItem>
	    </span>
	    <span className="flex md:hidden">
		<MenuItem>lists</MenuItem>
	    	<MenuItem>you smal</MenuItem>
	    	<MenuItem>about</MenuItem>
	    	<MenuItem>feedback</MenuItem>
	    </span>
	    <MenuItem>login?</MenuItem>
	</nav>
    );
}

function MenuItem({children}) {
    return (
	<a className="bg-primary dark:bg-primary-dark px-5 py-3 hover:brightness-125 list-none">
	    {children}
	</a>
    )
}
