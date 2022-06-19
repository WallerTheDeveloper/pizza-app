package com.example.pizzaapp.Controllers;

import com.example.pizzaapp.Models.OrderedPizzas;
import com.example.pizzaapp.Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping
public class OrderController {

    private final OrderService mOrderedService;

    @Autowired
    public OrderController(OrderService orderedService) {
        this.mOrderedService = orderedService;
    }

    @GetMapping(path = "/orders")
    public List<OrderedPizzas> getAllOrdered() {
        return mOrderedService.getAllOrdered();
    }

    @PostMapping(path = "/registerOrder")
    public ResponseEntity registerOrder(@RequestBody OrderedPizzas pizza) throws URISyntaxException {
        OrderedPizzas savedPizza = mOrderedService.saveOrder(pizza);
        return ResponseEntity.created(new URI("/menu/" + savedPizza.getOrderID())).body(savedPizza);
    }

    @PutMapping(path = "/orders/{orderID}")
    public ResponseEntity updateOrder(@PathVariable("orderID") Long orderID, @RequestBody OrderedPizzas order) {
        OrderedPizzas currentOrder = mOrderedService.findClient(orderID);
        mOrderedService.updateOrder(currentOrder, order);
        return ResponseEntity.ok(currentOrder);
    }

    @DeleteMapping(path = "/orders/{orderID}")
    public ResponseEntity deleteOrder(@PathVariable("orderID") Long orderID) {
        mOrderedService.deleteOrder(orderID);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping(path="/deleteAll")
    public ResponseEntity deleteAllFromCart() {
        mOrderedService.deleteAllFromCart();
        return ResponseEntity.ok().build();
    }
}
