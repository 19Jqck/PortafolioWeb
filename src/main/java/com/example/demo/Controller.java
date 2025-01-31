package com.example.demo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class Controller {
    @GetMapping({"/","/index","/home"})
    public String index(Model model) {
        model.addAttribute("titulo", "Hola Mundo");
        model.addAttribute("titulo2", "¿CÓMO ESTÁN?");
        return "index";
    }
}
