import { Image, Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <Flex justifyContent="space-between">
      <Flex alignItems="center">
        <Image
          src={item.imgUrl}
          alt={`Picture of ${item.name}`}
          rounded="lg"
          w="125px"
          h="75px"
          objectFit="cover"
        />
        <div>
          <Box display="flex" alignItems="center" ml="5px">
            {item.name}

            {quantity > 1 && (
              <Text ml="5px" fontSize="sm" color="gray.500">
                X{quantity}
              </Text>
            )}
          </Box>
          <Text ml="5px">{formatCurrency(item.price)}</Text>
        </div>
      </Flex>
      <Flex alignItems="center">
        <Text mr="5px">{formatCurrency(item.price * quantity)}</Text>
        <IconButton
          variant="outline"
          colorScheme="red"
          aria-label="remove item"
          icon={<SmallCloseIcon />}
          onClick={() => removeFromCart(id)}
        />
      </Flex>
    </Flex>
  );
};

export default CartItem;
