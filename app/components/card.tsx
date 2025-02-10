export default function Card({children}:{children:React.ReactNode}) {
    return (
	<div className="flex w-full max-w-5xl p-2 bg-primary">
	    {children}
	</div>
    )
}
