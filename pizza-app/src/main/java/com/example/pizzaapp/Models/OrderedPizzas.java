package com.example.pizzaapp.Models;


import com.example.pizzaapp.Types.DoughType;
import com.example.pizzaapp.Types.SauceType;
import com.example.pizzaapp.Types.SizeType;

import javax.persistence.*;
import java.time.LocalTime;

@Entity
@Table(name = "ordered_pizzas")
public class OrderedPizzas {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long orderID;

    @Column(nullable = false)
    private String orderTime;

    @Column(nullable = false)
    private String orderedPizzaName;

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
    private SizeType sizeType;

    public OrderedPizzas(String orderTime, String orderedPizzaName, String imageUrl, DoughType doughType,
                         SauceType sauceType, SizeType sizeType) {
        this.orderTime = orderTime;
        this.orderedPizzaName = orderedPizzaName;
        this.imageUrl = imageUrl;
        this.doughType = doughType;
        this.sauceType = sauceType;
        this.sizeType = sizeType;
    }

    public OrderedPizzas() {

    }

    public Long getOrderID() {
        return orderID;
    }

    public String getOrderTime() {
        return orderTime;
    }

    public String getOrderedPizzaName() {
        return orderedPizzaName;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public DoughType getDoughType() {
        return doughType;
    }

    public SauceType getSauceType() {
        return sauceType;
    }

    public SizeType getSizeType() {
        return sizeType;
    }

    public void setDoughType(DoughType doughType) {
        this.doughType = doughType;
    }

    public void setSauceType(SauceType sauceType) {
        this.sauceType = sauceType;
    }

    public void setSizeType(SizeType sizeType) {
        this.sizeType = sizeType;
    }

    public void setOrderTime(String orderTime) {
        this.orderTime = orderTime;
    }

    public void setOrderedPizzaName(String orderedPizzaName) {
        this.orderedPizzaName = orderedPizzaName;
    }
}
