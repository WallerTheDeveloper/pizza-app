package com.example.pizzaapp.Repositories;

import com.example.pizzaapp.Models.PizzaModel;
import org.springframework.data.jpa.repository.JpaRepository;

//Data Access Layer
public interface PizzaRepository
        extends JpaRepository<PizzaModel, Long> {
    // PizzaModel - model, that we are working with
    // Long - row ID in our PizzaModel
}
