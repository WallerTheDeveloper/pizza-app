package com.example.pizzaapp.Repositories;

import com.example.pizzaapp.Models.OrderedPizzas;
import org.springframework.data.jpa.repository.JpaRepository;

//Data Access Layer
public interface OrdersRepository extends JpaRepository<OrderedPizzas, Long> {
    // OrderedPizzas - model, that we are working with
    // Long - row ID in our PizzaModel
}
