import Image from "next/image";
import NavBar from "./menu";

export default function Home() {
    return (
	<div className="margin-0 font-[family-name:var(--font-lexend)]">
	<NavBar />
      	    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="px-4">hello</div>
                <div className="px-4">hello</div>
                <div className="px-4">hello</div>
                <div className="px-4">hello</div>
                <div className="px-4">hello</div>
      	    </main>
      	    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      	    </footer>
      	</div>
    );
}
