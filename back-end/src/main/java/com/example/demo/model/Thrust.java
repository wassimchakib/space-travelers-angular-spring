package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Thrust {
  @Id
  private String id;
  private Integer kN;
  private Integer lbf;
}
