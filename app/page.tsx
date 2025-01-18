// eslint-disable-next-line no-unused-vars
import Image from "next/image";
import NavBar from "./components/menu";
import Feed from "./components/feed";

export default function Home() {
    return (
	<div className="margin-0 font-[family-name:var(--font-lexend)]">
	<NavBar />
	<Feed />
      	    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      	    </footer>
      	</div>
    );
}
