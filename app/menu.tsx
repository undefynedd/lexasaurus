export default function Menu() {
    return (
	<nav className="bg-primary w-full flex justify-between">
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
	<a className="bg-primary p-5 hover:brightness-125 list-none">
	    {children}
	</a>
    )
}
