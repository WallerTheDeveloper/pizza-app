package com.example.pizzaapp.Models;

import com.example.pizzaapp.Types.DoughType;
import com.example.pizzaapp.Types.SauceType;
import com.example.pizzaapp.Types.SizeType;

import javax.persistence.*;

@Entity
@Table(name = "pizzas")
public class PizzaModel {
    @Id
    @GeneratedValue
    private Long id;
    
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String imageUrl;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private DoughType doughType;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private SauceType sauceType;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private SizeType size;

    public PizzaModel(String name, String description, String imageUrl, DoughType doughType, SauceType sauceType, SizeType size) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.doughType = doughType;
        this.sauceType = sauceType;
        this.size = size;
    }

    public PizzaModel() {}

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() { return description; }

    public String getImageUrl() {
        return imageUrl;
    }

    public DoughType getDoughType() {
        return doughType;
    }

    public SauceType getSauceType() {
        return sauceType;
    }

    public SizeType getSize() {
        return size;
    }
}
