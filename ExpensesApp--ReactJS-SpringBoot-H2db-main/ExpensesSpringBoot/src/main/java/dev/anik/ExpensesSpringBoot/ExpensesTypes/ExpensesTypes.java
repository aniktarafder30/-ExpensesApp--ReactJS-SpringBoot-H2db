package dev.udhayakumar.ExpensesSpringBoot.ExpensesTypes;

import jakarta.persistence.*;

@Entity
public class ExpensesTypes {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column
    private String typeName;

    public Long getId() {
        return id;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }
}
