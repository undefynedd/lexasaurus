export default function Menu() {
    return (
        <>
            <div className="text-center text-3xl mt-5"><a href="#">Lexasaurus</a></div>
    	    <nav className="bg-background border-b border-midground w-full flex justify-between -mt-3">
	        <span className="hidden md:flex">
	    	    <MenuItem link="#">lists</MenuItem>
	            <MenuItem link="#">create</MenuItem>
	            <MenuItem link="#">about</MenuItem>
	            <MenuItem link="#">feedback</MenuItem>
	        </span>
	        <span className="flex md:hidden">
	    	    <MenuItem link="#">lists</MenuItem>
	            <MenuItem link="#">you smal</MenuItem>
	            <MenuItem link="#">about</MenuItem>
	            <MenuItem link="#">feedback</MenuItem>
	        </span>
	        <MenuItem link="#">login?</MenuItem>
	    </nav>
        </>
    );
}

function MenuItem({children, link}: {children: React.ReactNode, link: string}) {
    return (
	<a href={link} className="bg-background px-5 py-3 hover:brightness-125 list-none">
	    {children}
	</a>
    )
}
