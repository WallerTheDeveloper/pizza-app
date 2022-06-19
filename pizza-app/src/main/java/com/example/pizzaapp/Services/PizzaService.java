package com.example.pizzaapp.Services;

import com.example.pizzaapp.Models.PizzaModel;
import com.example.pizzaapp.Repositories.PizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PizzaService {

    private final PizzaRepository mPizzaRepository;

    @Autowired
    public PizzaService(PizzaRepository pizzaRepository) {
        this.mPizzaRepository = pizzaRepository;
    }

    public List<PizzaModel> getAllPizzas() {
        return mPizzaRepository.findAll();
    }
    
}
