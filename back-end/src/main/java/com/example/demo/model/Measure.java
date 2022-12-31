package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Measure {
  @Id
  private String id;
  private float meters;
  private float feet;
}
