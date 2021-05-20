const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const values = Object.values(order);
    const ad = Object.values(values[2]);
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${values[0]}, Telefone: ${values[1]}, ${ad[0]}, Nº ${ad[1]}, AP: ${ad[2]}`);
  }
  
  console.log();
  //customerInfo(order);
  
  const orderModifier = (order) => {
    order.order.delivery.deliveryPerson = 'Luiz Silva';
    order.order.pizza = {
      muzzarella: {
        amount: 1,
        price: 20,
      },
      calabresa: {
        amount: 1,
        price: 20,
      }
    }
    console.log(`Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é R$ ${order.order.pizza.muzzarella.price + order.order.pizza.calabresa.price + order.order.drinks.coke.price},00.`);
  }
  
  orderModifier(order);