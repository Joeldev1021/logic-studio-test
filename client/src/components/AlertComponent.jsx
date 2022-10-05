import { Alert, AlertIcon, CloseButton } from "@chakra-ui/react";
import React, { MouseEvent } from "react";

const AlertComponent = ({ handleClose }) => {
	return (
		<Alert position='relative' status='error'>
			<AlertIcon />
			There was an error missing fields
			<CloseButton
				alignSelf='flex-start'
				position='absolute'
				right={0}
				top={"1.5"}
				onClick={(e) => handleClose(e)}
			/>
		</Alert>
	);
};

export default AlertComponent;
