import "./App.css";
import { Box } from "@chakra-ui/react";
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
			<Header setSearch={setSearch} />
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
			>
				<Form setData={setData} />

				{loading ? "cargand..." : <TableComponent dataFilter={dataFilter} />}
			</Box>
		</>
	);
}

export default App;
