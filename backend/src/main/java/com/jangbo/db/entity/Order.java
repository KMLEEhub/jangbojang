package com.jangbo.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "ORDERS")
@Getter
@Setter
public class Order {
    @Id @GeneratedValue
    @Column(name = "order_no")
    private Integer orderNo;

    @NotBlank
    private String customerId;

    @NotBlank
    private Timestamp orderDate; //안되면 이거부터 수정하기

    @NotBlank
    private int storeNo;

    @NotBlank
    private String status;

    @NotBlank
    private int marketNo;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToMany()
    private List<OrderItem> orderItems = new ArrayList<>();



}