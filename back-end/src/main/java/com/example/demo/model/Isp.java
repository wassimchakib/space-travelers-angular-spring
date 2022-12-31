package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Isp {
  @Id
  private String id;
  private Integer sea_level;
  private Integer vacuum;
}
