import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  IconButton,
  Button,
  Text
} from "@chakra-ui/react";
import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const isNew: boolean = true;

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const quantity: number = 1
  
  return (
    <Flex p={30} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        w="xl"
        maxW="xl"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={imgUrl}
          alt={`Picture of ${name}`}
          roundedTop="lg"
          w="100%"
          h="300px"
          objectFit="cover"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <IconButton aria-label="card" boxSize="46px" rounded="full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1H3L3.4 3M5 11H15L19 3H3.4M5 11L3.4 3M5 11L2.70711 13.2929C2.07714 13.9229 2.52331 15 3.41421 15H15M15 15C13.8954 15 13 15.8954 13 17C13 18.1046 13.8954 19 15 19C16.1046 19 17 18.1046 17 17C17 15.8954 16.1046 15 15 15ZM7 17C7 18.1046 6.10457 19 5 19C3.89543 19 3 18.1046 3 17C3 15.8954 3.89543 15 5 15C6.10457 15 7 15.8954 7 17Z"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </IconButton>
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              {formatCurrency(price)}
            </Box>
          </Flex>
          <Box mt="16px">
              {quantity === 0 ? (
                <Button w="full" colorScheme='blue' leftIcon={<PlusSquareIcon />}>
                  Add to Cart
                </Button>
              ) : (
                <Flex direction="column" alignItems="center" gap="5px">
                  <Flex alignItems="center" gap="16px">
                    <Button colorScheme='blue'>-</Button>
                    <Text fontSize='md'>{quantity.toString()} inCart</Text>
                    <Button colorScheme='blue'>+</Button>
                  </Flex>
                  <Button colorScheme='red'>Remove</Button>
                </Flex>
              ) }
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default StoreItem;
