import "./App.css";
import { Box } from "@chakra-ui/react";
import TableComponent from "./components/Table";
import Form from "./components/Form";

function App() {
	return (
		<Box
			display='flex'
			flexDir='column'
			alignItems='center'
			justifyContent='center'
		>
			<TableComponent />
			<Form />
		</Box>
	);
}

export default App;
