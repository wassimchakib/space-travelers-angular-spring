package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class LandingLegs {
  @Id
  private String id;
  private Integer number;
  private String material;
}
