package dev.udhayakumar.ExpensesSpringBoot.Expenses;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Entity
public class Expenses {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    @Column
    private String expensesType;
    @Column
    private Long amount ;

    @Column
    private Long userId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Column
    @CreationTimestamp
    private Timestamp timeStamp;


    public Long getId() {
        return id;
    }
    public String getExpensesType() {
        return expensesType;
    }
    public void setExpensesType(String expensesType) {
        this.expensesType = expensesType;
    }
    public Long getAmount() {
        return amount;
    }
    public void setAmount(Long amount) {
        this.amount = amount;
    }

    public Timestamp getTimeStamp() {
        return timeStamp;
    }
}
