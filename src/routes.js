import Cardapio from "pages/Cardapio";
import Inicio from "pages/Inicio";
import Menu from "components/Menu";
import Header from "components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
	return (
		<main>
			<Router>
				<Menu />
				<Routes>
					<Route path="/" element={<Header />}>
						<Route index element={<Inicio />} />
						<Route path="cardapio" element={<Cardapio />} />
					</Route>
				</Routes>
			</Router>
		</main>
	);
}
