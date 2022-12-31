package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Weight {
  @Id
  private String id;
  private float kg;
  private float lb;
}
