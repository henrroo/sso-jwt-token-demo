package com.unillanos.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping({"/hello"})
    public String hello() {
        return "Hello World, you're now authenticated!";
    }

}
