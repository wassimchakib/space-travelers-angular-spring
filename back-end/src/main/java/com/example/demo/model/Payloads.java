package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Payloads {
  @Id
  private String id;
  private String option_1;
  @OneToOne
  private Composite_fairing composite_fairing;
}
