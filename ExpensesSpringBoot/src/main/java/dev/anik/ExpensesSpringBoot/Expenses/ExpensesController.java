package dev.udhayakumar.ExpensesSpringBoot.Expenses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class ExpensesController {
    @Autowired
    ExpensesRepo expensesRepo;

    @GetMapping("/getallexpenses")
    @CrossOrigin(origins = "http://localhost:3000/")
    public Map<String, Object> getAllExpenses(@RequestParam("userid") Long userId){
        List<Expenses> expensesById = new ArrayList<>();
        List<Expenses> allExpenses = expensesRepo.findAll();
        for (Expenses e:allExpenses
             ) {
            if(e.getUserId()==userId){
                expensesById.add(e);
            }
        }
        Map<String,Object> response = new HashMap<>();
        if(expensesById.size()>0){
            response.put("Expenses",expensesById);
            response.put("Message",expensesById.size() +" Records found");
            return response;
        }else {
            response.put("Message","No data found");
            return response;
        }
    }



    @PostMapping("/addexpenses")
    @CrossOrigin(origins = "http://localhost:3000/")
    public String addExpenses(@RequestBody Expenses expenses){
        expensesRepo.save(expenses);
        return "Added..";
    }
}
