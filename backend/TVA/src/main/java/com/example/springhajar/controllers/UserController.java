package com.example.springhajar.controllers;

import com.example.springhajar.Model.User;
import com.example.springhajar.Model.Vehicule;
import com.example.springhajar.repositories.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("users")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/all")
    public List<User>  getAllUsers(){
        return userRepository.findAll();
    }
    @PostMapping("/save")
    public void save(@RequestBody User user){
        userRepository.save(user);
    }
    @PostMapping("/verify")
    public User verifyUser(@RequestBody String email){
        System.out.println(userRepository.findByEmail(email));

       return userRepository.findByEmail(email);
    }
    @GetMapping(value = "/delete/{id}")
    public void delete(@PathVariable(required = true) Integer id) {
        System.out.println("id = "+id);
        User user = userRepository.findUserById(id);
        userRepository.delete(user);
    }

    @GetMapping(value = "/countUsers")
    public long countUsers() {
        return userRepository.getCount();
    }
    @GetMapping(value = "/counting")
    public Map<String, Long> countUsersByRole() {
        Map<String, Long> map = new HashMap<>();
        for(Object[] obj : userRepository.countingUsersByRole()){
            map.put(String.valueOf(obj[1]), (Long) obj[0] );
        }
        return map;
    }

    @PostMapping("/check")
    public String checkIfUser(@RequestBody User user){
        System.out.println(user.getEmail()+" "+user.getPassword());
        User userInDB = userRepository.findByEmail(user.getEmail());
        //System.out.println(userInDB.getEmail()+""+userInDB.getPassword());
        if(userInDB == null){
            return "notFound";
        }else{
            if(userInDB.getPassword().equals(user.getPassword())){
                String role = userInDB.getRole();
                System.out.println(role);
                return "accessPermitted_"+role ;
            }else{
                //System.out.println("password incorrect");
                return "passwordIncorrect";
            }
        }

    }
}
