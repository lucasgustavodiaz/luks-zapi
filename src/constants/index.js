import { burger1, burger2, pizza1, pizza2, sanbu1, sanbu2, tag_burger, tag_pizza, tag_sambu } from '../assets'

export const foodItems = [
  {
    id: 1,
    name: 'Pizza Tranca',
    img: pizza1,
    section: 'Pizzas',
    description: 'Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.',
    price: 100
  },
  {
    id: 2,
    name: 'Pizza Mix',
    img: pizza2,
    section: 'Pizzas',
    description: 'Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.',
    price: 100
  },
  {
    id: 3,
    name: 'Pizza Mila',
    img: pizza2,
    section: 'Pizzas',
    description: 'Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.',
    price: 100
  },
  {
    id: 4,
    name: 'Burger Zarpada',
    img: burger1,
    section: 'Burgers',
    description:
      'Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.',
    price: 100
  },
  {
    id: 5,
    name: 'Burger en la pera',
    img: burger2,
    section: 'Burgers',
    description:
      'Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.',
    price: 100
  },
  {
    id: 6,
    name: 'Burger Zarpada',
    img: burger1,
    section: 'Burgers',
    description:
      'Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.',
    price: 100
  },
  {
    id: 7,
    name: 'Sambuchito 1',
    img: sanbu1,
    section: 'Sambuchitos',
    description: 'Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.',
    price: 100
  },
  {
    id: 8,
    name: 'Sambuchito 2',
    img: sanbu2,
    section: 'Sambuchitos',
    description: 'Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.',
    price: 100
  },
  {
    id: 9,
    name: 'Sambuchito 3',
    img: sanbu1,
    section: 'Sambuchitos',
    description: 'Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.',
    price: 100
  }
]

export const arraySections = [
  {
    section: 'Pizzas',
    imgTag: tag_pizza
  },

  {
    section: 'Burgers',
    imgTag: tag_burger
  },

  {
    section: 'Sambuchitos',
    imgTag: tag_sambu
  }
]

export const Foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = []
  }
  res[food.section] = [...res[food.section], food]

  return res
}, {})
