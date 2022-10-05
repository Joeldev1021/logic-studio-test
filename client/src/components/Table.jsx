import React from "react";
import {
	Button,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";

const TableComponent = ({ dataFilter }) => {
	return (
		<TableContainer paddingTop='30px' width='600px'>
			<Table variant='simple'>
				<TableCaption>Imperial to metric conversion factors</TableCaption>
				<Thead bg=''>
					<Tr>
						<Th>License Plate</Th>
						<Th>Date</Th>
						<Th isNumeric>Hour</Th>
						<Th isNumeric>Status</Th>
					</Tr>
				</Thead>
				<Tbody>
					{dataFilter.length > 0 &&
						dataFilter.map((item) => {
							return (
								<Tr key={item._id}>
									<Td>{item.numberPlate}</Td>
									<Td>{item.date}</Td>
									<Td isNumeric>{item.hour}</Td>
									<Td>
										<Button
											colorScheme={item.status ? "whatsapp" : "messenger"}
										>
											{item.status ? "Programda" : "Agendada"}
										</Button>
									</Td>
								</Tr>
							);
						})}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default TableComponent;
