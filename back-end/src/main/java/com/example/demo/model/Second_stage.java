package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Second_stage {
  @Id
  private String id;
  @OneToOne
  private Stage stage;
  @OneToOne
  private Thrust thrust;
  @OneToOne
  private Payloads payloads;
}
