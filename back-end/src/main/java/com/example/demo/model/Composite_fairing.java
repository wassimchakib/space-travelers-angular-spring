package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Composite_fairing {
  @Id
  private String id;
  @OneToOne
  private Measure height;
  @OneToOne
  private Measure diameter;
}
