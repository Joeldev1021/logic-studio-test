import {
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { carDatePost } from "../api";
import AlertComponent from "./AlertComponent";

function Form({ setData }) {
	const [formData, setFormData] = useState({
		date: "",
		hour: "",
		numberPlate: "",
	});

	const [isError, setIsError] = useState(false);

	const handleInputChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (formData.date && formData.hour && formData.numberPlate) {
			const response = await carDatePost(formData);
			if (response.data) {
				setData((prev) => [...prev, { ...response.data }]);
			}
		} else {
			setIsError(true);
		}
	};

	const handleClose = (e) => {
		setIsError(false);
	};

	return (
		<Box>
			{isError && <AlertComponent handleClose={handleClose} />}
			<Heading as='h4' color='blue.400' size='md'>
				Form Car-Date
			</Heading>
			<form className='form' onSubmit={handleSubmit}>
				<FormControl>
					<FormLabel>license plate</FormLabel>
					<Input
						onChange={handleInputChange}
						name='numberPlate'
						placeholder='number license plate'
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Date</FormLabel>
					<Input
						name='date'
						placeholder='Select Date and Time'
						size='md'
						type='date'
						onChange={handleInputChange}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Hour</FormLabel>
					<Input
						onChange={handleInputChange}
						name='hour'
						placeholder='Select Date and Time'
						size='md'
						type='time'
					/>
				</FormControl>
				<Button type='submit' mt='1.5' colorScheme='messenger'>
					Send
				</Button>
			</form>
		</Box>
	);
}

export default Form;
