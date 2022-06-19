package com.example.pizzaapp.Configs;

import com.example.pizzaapp.Models.PizzaModel;
import com.example.pizzaapp.Repositories.PizzaRepository;
import com.example.pizzaapp.Types.DoughType;
import com.example.pizzaapp.Types.SauceType;
import com.example.pizzaapp.Types.SizeType;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class PizzaConfig {

    @Bean
    CommandLineRunner commandLineRunnerPizza(PizzaRepository pizzaRepository) {
        return args -> {
            PizzaModel margherita = new PizzaModel(
                    "Margherita",
                    "Lorem ipsum dolor sit amet, " +
                            "consectetur adipiscing elit. Ut eget blandit sapien. " +
                            "Pellentesque eget dictum tellus. Aenean non nibh eget metus rhoncus aliquet.\n",
                    "https://pizza-images-docker.s3.eu-west-3.amazonaws.com/Margherita.jpg",
                    DoughType.THICK,
                    SauceType.BBQSauce,
                    SizeType.BIG
            );
            PizzaModel pepperoni = new PizzaModel(
                    "Pepperoni",
                    "Lorem ipsum dolor sit amet, " +
                            "consectetur adipiscing elit. Ut eget blandit sapien. " +
                            "Pellentesque eget dictum tellus. Aenean non nibh eget metus rhoncus aliquet.\n",
                    "https://pizza-images-docker.s3.eu-west-3.amazonaws.com/Pepperoni.jpg",
                    DoughType.THIN,
                    SauceType.TomatoSauce,
                    SizeType.AVERAGE
            );
            PizzaModel cheesePizza = new PizzaModel(
                    "Cheese Pizza",
                    "Lorem ipsum dolor sit amet, " +
                            "consectetur adipiscing elit. Ut eget blandit sapien. " +
                            "Pellentesque eget dictum tellus. Aenean non nibh eget metus rhoncus aliquet.\n",
                    "https://pizza-images-docker.s3.eu-west-3.amazonaws.com/Cheese.jpg",
                    DoughType.THICK,
                    SauceType.TomatoSauce,
                    SizeType.AVERAGE
            );
            PizzaModel veggiePizza = new PizzaModel(
                    "Veggie Pizza",
                    "Lorem ipsum dolor sit amet, " +
                            "consectetur adipiscing elit. Ut eget blandit sapien. " +
                            "Pellentesque eget dictum tellus. Aenean non nibh eget metus rhoncus aliquet.\n",
                    "https://pizza-images-docker.s3.eu-west-3.amazonaws.com/Veggie.jpg",
                    DoughType.THIN,
                    SauceType.CreamSauce,
                    SizeType.XXL
            );
            PizzaModel meatPizza = new PizzaModel(
                    "Meat Pizza",
                    "Lorem ipsum dolor sit amet, " +
                            "consectetur adipiscing elit. Ut eget blandit sapien. " +
                            "Pellentesque eget dictum tellus. Aenean non nibh eget metus rhoncus aliquet.\n",
                    "https://pizza-images-docker.s3.eu-west-3.amazonaws.com/MeatPizza.jpg",
                    DoughType.THICK,
                    SauceType.BBQSauce,
                    SizeType.SMALL
            );
            PizzaModel hawaiianPizza = new PizzaModel(
                    "Hawaiian Pizza",
                    "Lorem ipsum dolor sit amet, " +
                            "consectetur adipiscing elit. Ut eget blandit sapien. " +
                            "Pellentesque eget dictum tellus. Aenean non nibh eget metus rhoncus aliquet.\n",
                    "https://pizza-images-docker.s3.eu-west-3.amazonaws.com/Hawaiian.jpg",
                    DoughType.THICK,
                    SauceType.TomatoSauce,
                    SizeType.SMALL
            );
            PizzaModel bbqChickenPizza = new PizzaModel(
                    "BBQ Chicken Pizza",
                    "Lorem ipsum dolor sit amet, " +
                            "consectetur adipiscing elit. Ut eget blandit sapien. " +
                            "Pellentesque eget dictum tellus. Aenean non nibh eget metus rhoncus aliquet.\n",
                    "https://pizza-images-docker.s3.eu-west-3.amazonaws.com/ChickenPizza.jpg",
                    DoughType.THICK,
                    SauceType.BBQSauce,
                    SizeType.BIG
            );
            PizzaModel buffaloPizza = new PizzaModel(
                    "Buffalo Pizza",
                    "Lorem ipsum dolor sit amet, " +
                            "consectetur adipiscing elit. Ut eget blandit sapien. " +
                            "Pellentesque eget dictum tellus. Aenean non nibh eget metus rhoncus aliquet.\n",
                    "https://pizza-images-docker.s3.eu-west-3.amazonaws.com/Buffalo.jpg",
                    DoughType.THIN,
                    SauceType.CreamSauce,
                    SizeType.XXL
            );
            PizzaModel supremePizza = new PizzaModel(
                    "Supreme Pizza",
                    "Lorem ipsum dolor sit amet, " +
                            "consectetur adipiscing elit. Ut eget blandit sapien. " +
                            "Pellentesque eget dictum tellus. Aenean non nibh eget metus rhoncus aliquet.\n",
                    "https://pizza-images-docker.s3.eu-west-3.amazonaws.com/Supreme.jpg",
                    DoughType.THIN,
                    SauceType.TomatoSauce,
                    SizeType.AVERAGE
            );

            pizzaRepository.saveAll(
                    List.of(margherita, pepperoni, cheesePizza, veggiePizza,
                            meatPizza, hawaiianPizza, bbqChickenPizza, buffaloPizza, supremePizza)
            );
        };
    }
}
