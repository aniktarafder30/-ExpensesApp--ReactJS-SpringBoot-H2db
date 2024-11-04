package dev.udhayakumar.ExpensesSpringBoot.ExpensesTypes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExpensesTypesContoller {

    @Autowired
    ExpensesTypesRepo expensesTypesRepo;

    @PostMapping("/addexpensestype")
    public String addExpensesType(@RequestParam String typeName){
        ExpensesTypes newExpensesType = new ExpensesTypes();
        newExpensesType.setTypeName(typeName);
        expensesTypesRepo.save(newExpensesType);
        return "Added..";
    }

    @GetMapping("/getallexpensestypes")
    @CrossOrigin(origins = "http://localhost:3000/")
    public List<ExpensesTypes> getAllExpensestypes(){
        return expensesTypesRepo.findAll();
    }
}
