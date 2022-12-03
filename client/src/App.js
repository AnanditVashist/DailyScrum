import AdminSidebar from "./Sections/AdminSidebar/AdminSidebar";
import Navbar from "./Sections/Navbar/Navbar";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Routes,
} from "react-router-dom";
import CheckinForm from "./Sections/CheckinForm/CheckinForm";
import Body from "./Sections/Body/Body";
import FlexContainer from "./Components/Helpers/FlexContainer";
function App() {
	return (
		<Router>
			<Navbar></Navbar>
			<FlexContainer>
				<AdminSidebar></AdminSidebar>
				<Body>
					<Routes>
						<Route
							path="/checkin"
							element={<CheckinForm></CheckinForm>}></Route>
					</Routes>
				</Body>
			</FlexContainer>
		</Router>
	);
}

export default App;
