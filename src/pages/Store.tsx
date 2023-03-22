import storeItems from "../data/items.json";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <>
      <Text fontSize="4xl">Store</Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={2}>
        {storeItems.map((item) => (
          <Box key={item.id}>
            <StoreItem {...item} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Store;
