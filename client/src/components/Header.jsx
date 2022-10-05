import {
	Box,
	Container,
	Input,
	Button,
	Flex,
	Heading,
	HStack,
	useBreakpointValue,
} from "@chakra-ui/react";

const Header = ({ setSearch }) => {
	const isDesktop = useBreakpointValue({ base: false, lg: true });
	return (
		<Box border='1px' as='section' borderColor='gray.200'>
			<Box as='nav' bg='bg-surface'>
				<Container py={{ base: "4", lg: "5" }}>
					<HStack spacing='10' justify='space-between'>
						<Heading as='h3' size={"md"} color='blue.500'>
							CARD-DATE
						</Heading>{" "}
						<Flex justify='space-between' flex='1'>
							<Button>Search</Button>
							<Input
								variant='outline'
								name='search'
								onChange={(e) => setSearch(e.target.value)}
								placeholder='Search number plate'
							/>
						</Flex>
					</HStack>
				</Container>
			</Box>
		</Box>
	);
};

export default Header;
