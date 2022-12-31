package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Stage {
  @Id
  private String id;
  private Boolean reusable;
  private Integer engines;
  private Float fuel_amount_tons;
  private Float burn_time_sec;
}
