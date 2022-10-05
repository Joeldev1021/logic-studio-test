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

const Header = ({ setSearch, setIsOpen }) => {
	const isDesktop = useBreakpointValue({ base: false, lg: true });
	return (
		<Box border='1px' as='section' borderColor='gray.200'>
			<Box as='nav' bg='bg-surface'>
				<Container maxW='800px' py={{ base: "4", lg: "5" }}>
					<HStack spacing='10' justify='space-between'>
						<Heading as='h3' size={"md"} color='blue.500'>
							CARD-DATE
						</Heading>{" "}
						<Flex justify='space-between' width={"90%"} flex='2'>
							<form>
								<Flex>
									<Input
										variant='outline'
										name='search'
										onChange={(e) => setSearch(e.target.value)}
										placeholder='Search number plate'
									/>
								</Flex>
							</form>
							<Button
								onClick={() => setIsOpen((open) => !open)}
								colorScheme='whatsapp'
							>
								New Date
							</Button>
						</Flex>
					</HStack>
				</Container>
			</Box>
		</Box>
	);
};

export default Header;
