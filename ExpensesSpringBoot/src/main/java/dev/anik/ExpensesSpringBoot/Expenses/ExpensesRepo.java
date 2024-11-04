package dev.udhayakumar.ExpensesSpringBoot.Expenses;


import dev.udhayakumar.ExpensesSpringBoot.Expenses.Expenses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpensesRepo extends JpaRepository<Expenses,Long> {
}
