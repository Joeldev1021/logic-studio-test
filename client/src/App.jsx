import "./App.css";
import { Box, Spinner } from "@chakra-ui/react";
import TableComponent from "./components/Table";
import Form from "./components/Form";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { getCardDate } from "./api";

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [dataFilter, setDataFilter] = useState([]);
	const [search, setSearch] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setLoading(true);
		getCardDate()
			.then((res) => setData(res.data))
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, []);

	useEffect(() => {
		if (search.length > 0) {
			setDataFilter(
				data.filter((item) =>
					item.numberPlate.toLowerCase().includes(search.toLowerCase())
				)
			);
		} else {
			setDataFilter(data);
		}
	}, [search, data]);

	return (
		<>
			<Header setSearch={setSearch} setIsOpen={setIsOpen} />
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
			>
				{isOpen && <Form setData={setData} />}

				{loading ? (
					<Spinner
						thickness='4px'
						speed='0.65s'
						emptyColor='gray.200'
						color='blue.500'
						size='xl'
					/>
				) : (
					<TableComponent dataFilter={dataFilter} />
				)}
			</Box>
		</>
	);
}

export default App;
