import {
  Box,
  CloseButton,
  Flex,
  Slide,
  Text,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
      <Box w="full" h="full" backgroundColor="brand.100" onClick={closeCart}>
        <Box
          w="460px"
          h="full"
          p="20px"
          position="absolute"
          right={0}
          color="black"
          bg="white"
          shadow="lg"
          onClick={(e) => e.stopPropagation()}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="lg">Cart</Text>
            <CloseButton onClick={closeCart} />
          </Flex>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
            mt="16px"
          >
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <Text fontSize="lg" fontWeight="bold">
              Total:{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find(
                    (item) => item.id === cartItem.id
                  );
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </Text>
          </VStack>
        </Box>
      </Box>
    </Slide>
  );
};

export default ShoppingCart;
