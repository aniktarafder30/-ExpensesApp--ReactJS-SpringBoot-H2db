package dev.udhayakumar.ExpensesSpringBoot.UserDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserDetailsController {

    @Autowired
    UserDetailsRepo userDetailsRepo;

    @PostMapping("/createuser")
    public String createUser(@RequestBody UserDetails newUser){
        userDetailsRepo.save(newUser);
        return "Created..";
    }

    @GetMapping("/getalluser")
    public List<UserDetails> allUser(){
        return userDetailsRepo.findAll();
    }

    @PostMapping("/updateuser")
    public String updateUser(@RequestBody UserDetails updateuser){
        userDetailsRepo.save(updateuser);
        return "User Updated..";
    }

    @GetMapping("/verifyuser")
    @CrossOrigin(origins = "http://localhost:3000/")
    public Map<String,Object> verifyUser(@RequestParam("id") Long id, @RequestParam("password") String password){
        List<UserDetails> user = userDetailsRepo.findAll();
        UserDetails userData = new UserDetails();
        boolean auth = false;
        String message = "User not found";
        for (UserDetails u: user
             ) {
            if(u.getId()==id){
                message = "Invalid password";
             if(u.getPassword().equals(password)){
                 auth = true;message="Verified";userData=u;
             }
            }
        }
        Map<String,Object> response = new HashMap<>();
        if(auth){
            response.put("Auth",auth);
            response.put("UserDetails",userData);
            response.put("Message",message);
            return response;
        }else {
            response.put("Auth",auth);
            response.put("Message",message);

            return response;
        }
    }
}
