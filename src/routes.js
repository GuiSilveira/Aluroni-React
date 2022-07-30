import Cardapio from "pages/Cardapio";
import Inicio from "pages/Inicio";
import Sobre from "pages/Sobre";
import Menu from "components/Menu";
import Header from "components/Header";
import Footer from "components/Footer";
import Prato from "pages/Prato";
import NotFound from "pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>
				<Menu />
				<Routes>
					<Route path="/" element={<Header />}>
						<Route index element={<Inicio />} />
						<Route path="cardapio" element={<Cardapio />} />
						<Route path="sobre" element={<Sobre />} />
					</Route>
					<Route path="*" element={<NotFound />} />
					<Route path="prato/:id" element={<Prato />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}
