package com.example.pizzaapp.Controllers;

import com.example.pizzaapp.Models.PizzaModel;
import com.example.pizzaapp.Services.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/menu")
public class PizzaController {

    private final PizzaService mPizzaService;

    @Autowired
    public PizzaController(PizzaService pizzaService) {
        this.mPizzaService = pizzaService;
    }

    @GetMapping
    public List<PizzaModel> getAllPizzas() {
        return mPizzaService.getAllPizzas();
    }
}
