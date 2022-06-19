package com.example.pizzaapp.Services;

import com.example.pizzaapp.Models.OrderedPizzas;
import com.example.pizzaapp.Repositories.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class OrderService {

    private final OrdersRepository mOrdersRepo;

    @Autowired
    public OrderService(OrdersRepository ordersRepository) {
        this.mOrdersRepo = ordersRepository;
    }

    public List<OrderedPizzas> getAllOrdered() {
        return mOrdersRepo.findAll();
    }

    public OrderedPizzas saveOrder(OrderedPizzas pizza) {
        return mOrdersRepo.save(pizza);
    }

    public OrderedPizzas findClient(Long orderID) {
        return mOrdersRepo.findById(orderID).orElseThrow(RuntimeException::new);
    }

    public void deleteOrder(Long id) {
        mOrdersRepo.deleteById(id);
    }

    @Transactional
    public void updateOrder(OrderedPizzas currentOrder, OrderedPizzas order) {
        currentOrder.setDoughType(order.getDoughType());
        currentOrder.setOrderTime(order.getOrderTime());

        currentOrder.setOrderedPizzaName(order.getOrderedPizzaName());
        currentOrder.setSauceType(order.getSauceType());

        currentOrder.setSizeType(order.getSizeType());
    }

    public void deleteAllFromCart() {
        mOrdersRepo.deleteAll();
    }
}
